import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
{  username: {
    type:String,
    required:true,
    unique:true,



    },
    email: {
        type:String,
        required:true,
        unique:true,
        
    
    
        },
        password: {
            type:String,
            required:true,
         
            
        
        
            }
,
            avatar:{
 type:String,
     default :"https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"           
            }

},{timestamps:true}    );

const User=mongoose.model('User',userSchema);

export default User;