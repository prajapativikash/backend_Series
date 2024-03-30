import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name:{
        type:"String",
        required:true
    }
},{timstamp:true})

export const Category = mongoose.model("Category",CategorySchema);

