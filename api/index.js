import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authrouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
import listingRouter from './routes/listing.route.js'
dotenv.config();



//mongoose connection
mongoose.connect("mongodb+srv://sourabhpunase19:Sourabh1205@cluster0.qjnjjxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('connected to mango db')
})
.catch((err)=>{
    console.log(err)
})
const app=express();
app.use(express.json());

//cookies to get extra info
app.use(cookieParser());
app.listen(3000,()=>{
    console.log('server is running')
})

//router for auth,listing,and user

app.use('/api/user',userRouter);
app.use('/api/auth',authrouter);
app.use('/api/listings',listingRouter);

//response
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||"internal server error"
return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
})
})