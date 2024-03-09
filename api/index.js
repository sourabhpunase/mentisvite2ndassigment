import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authrouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
import listingRouter from './routes/listing.route.js'
dotenv.config();




mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to mango db')
})
.catch((err)=>{
    console.log(err)
})
const app=express();
app.use(express.json());
app.use(cookieParser());
app.listen(3000,()=>{
    console.log('server is running')
})
app.use('/api/user',userRouter);
app.use('/api/auth',authrouter);
app.use('/api/listings',listingRouter);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||"internal server error"
return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
})
})