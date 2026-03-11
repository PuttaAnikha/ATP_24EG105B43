import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIs/userAPI.js'
import { productApp } from './APIs/productAPI.js'
import cookieParser from 'cookie-parser';
const app=exp()
//set a port number
const port=4000
//add body parser
app.use(exp.json())
//addd cookie parser middleware
app.use(cookieParser())
//forward req to userApp if path starts with/api-api
app.use("/user-api",userApp)
app.use("/product-api",productApp)
//connect to DB server
 async function connectDB() {
    try{
        await connect("mongodb://localhost:27017/anurag");
        console.log("connection success")
        //assign port number to http server-we use listen-to start http server
        app.listen(port,()=>console.log(`server listening port ${port}...`))
    }
    catch(err)
    {
        console.log("err in DB connection:",err);
    }
 }
 connectDB()
 //error handling middleware
 app.use((err,req,res,next)=>{
//res.status().json({message:"error occured",error:err.message})
console.log(err.name)
console.log(err.code)

//validation err
if(err.name==='ValidationError')
{
    return res.status(400).json({message:"error occured",error:err.message})
}
//cast err
if(err.name==="CastError")
{
    return res.status(400).json({message:"user not found",error:err.message})
}
//server side error
res.status(500).json({message:"error occured",err:err.message})
 });
 //error=>{name,message,callsatck}