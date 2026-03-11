import { Schema,model } from "mongoose";
//creating a schema for product
const productSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"ID cannot be empty"]
    },
    productName:{
          type:String,
          required:[true,"name cannot be empty"]
    },
    price:{
        type:Number,
        required:[true,"price is empty "],
        min:[10000,"price must be atleast 10000"],
        max:[50000,"price cannot exceed 50000"]
    },
    brand:{
        type:String,
        required:[true,"no brand is selected"]
    },
})
//creating a product model
export const productModel=model("product",productSchema)