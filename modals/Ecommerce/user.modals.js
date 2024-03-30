import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    usename:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
       
    },

},{timestamps:true})

const user = mongoose.modelNames('User',userSchema)