1.generate package.json
  npm init -y
2.create express
  npm i express
  -create a server.js file
   -import express
     import exp from "express";
3.install mongoose and connect to mongoDB server
  -npm i mongoose
     import {connect } from "mongoose"->server.js
  -connecting to database
    - in server.js file
      -write a function connectDB
        =>async function connectDB() {
        try{
        await connect("process.env.DB_URL");
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
->after this in server.js file
  npm i dotenv
     import {config} from "dotenv";
  npm i cookie-parser;
    import cookie-parser from "cookie-parser";
  const app=exp();
  app.use(exp.json())->body parser
  app.use(cookieParser())->cookie parser middleware
->then write the error handling middleware
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


 =>after this is done
 =>create models
   -eg:employee model
     ->import {Schema,model} from mongoose;
     ->then create a schema on the requiremenets you want 
     ->then export the employeeModel
       export const employeeModel=model("employee",employeeSchema)
=>create api
  -eg:employeeApi
    -import exp from "express";
    -export const empApp=exp.Router();
    -then define the api routes
    -npm i bcrypt 
       import { hash,compare } from 'bcrypt';
    -npm i jsonwebtoken
       import jwt from 'jsonwebtoken';
    -we also need to import the model
     import {employeeModel} from '../models/employeeModel.js'
    -create a seperate folder middleware and create a verifyToken.js file
    

