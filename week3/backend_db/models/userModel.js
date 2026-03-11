//import the schema class from mongoose and also model module
import { Schema,model} from "mongoose";
//create user schema(userName,password,email,age)
const userSchema=new Schema({
    //structure of user resource
    userName:{
        type:String,
        required:[true,"user name is required"],//second element sends a message if the username is empty.
        minLength:[4,"min length of username is 4 characters"],
        maxLength:[6,"username size exceeds 6 chars"]
    },
    password:{
        type:String,
        required:[true,"password required"]
    },
    email:{
        type:String,
        required:[true,"email required"],
        unique:[true,"email already existed"]
    },
    age:{
        type:Number,
    },},
    {
        versionKey:false,
        timestamps:true,
    },

);
//generate userModel
export const userModel=model("user",userSchema)//here the string pularize and create a collection with thatt name in the database given in the database url

