import { Schema ,model} from "mongoose";
const employeeSchema=new Schema({
    name:{
        type:String,
        required:[true,"name is required"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already exist"],
    },
    mobile:{
        type:Number,
        required:[true,"enter phone number"],
    },
    designation:{
        type:String,
        required:[true,"enter designation"],
    },
    companyName:{
        type:String,
        required:[true,"company name is not entered"]
    }
},
{
    versionKey:false,
    timestamps:true,
}
)
export const employeeModel=model("employee",employeeSchema)