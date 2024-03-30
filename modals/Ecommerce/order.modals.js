import mongoose, { mongo } from "mongoose";

const OrderItemSchema = new mongoose.Schema(
    {
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        },
        quantity:{
            type:Number,
            required:true
        }

})

const OrderSchema = new mongoose.Schema(
    {
        orderPrice:{
            type:Number,
            required:true
        },
        customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
        orderItem:{
         type:[OrderItemSchema]
        },
        address:{
            type:string,
            required:true
        },

        status:{
            type:String,
            enum:["PENDING","CANCELLED","DELIVERED"],
            default:"PENDING"

        }
    },{timestamps:true}
)

export const Order = mongoose.model("Order",OrderSchema)