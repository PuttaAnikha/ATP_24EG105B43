//create mini express app(seperate route)
import exp from 'express'
import {userModel} from '../models/userModel.js'
import { hash,compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../middlewares/verifyToken.js';
const {sign}=jwt
 export const userApp=exp.Router()
//define user rest api routes
   //user login
    userApp.post("/auth",async(req,res)=>
    {
      //get auth credentials from cilent
      const {email,password}=req.body;
      //verify email
      let user=await userModel.findOne({email:email})
      //if email not exist
      if(!user)
      {
        return res.status(400).json({message:"invalid email"})
      }
      //comapre password
      let result=await compare(password,user.password )
      //if password mot matched
      if(result===false)
      {
        return res.status(400).json({message:"invalid password"})
      }
      //if  password are matched
      //create a token-token is a jsonwebtoken-jwt or jaat)
      const signedToken=sign({email:user.email},"abcdef",{expiresIn:"10"})//here we use email since we have many users for which user we need token that will be given token
      //store token as http cookie only and then send response
      res.cookie("token",signedToken,{
        httpOnly:true,//we need this options since browser can read the data by enabling this we can stop the brwoser from doing this
        sameSite:"lax",//when we use lax it is neither strict nor loose 
        secure:false
      })
      res.status(200).json({message:"login sucess",payload:user})

    })

   //create new user
   userApp.post("/users",async(req,res)=>{
    //try{
      //get new user obj from req
      const newUser=req.body;
      //hash password
      const hashPass=await hash(newUser.password,10)
      //replace plain pass with hash pass
      newUser.password=hashPass
      //create new user document
      const newUserDocument=new userModel(newUser)
      //save
      const result=await newUserDocument.save()//document will be created inside the database.
      console.log(result)
      //send res
      res.status(201).json({message:"user created"})//201 shows whether the doc is created or not
   //}
   /*catch(err)
   {
    res.json({message:"error"})
   }}*/
});
  //read all users(to make protected route)
  userApp.get("/users",verifyToken,async(req,res)=>{
    //read all users from
   let userList= await userModel.find()
   //send res
   res.status(201).json({message:"users",playload:userList})

  });
7.
  //read a user by objectID
  userApp.get("/users/:id",async(req,res)=>{
    const uid=req.params.id
    //find user by id
   const userObj= await userModel.findById(uid)
   //if user not found
   if(!userObj)
    return res.status(404).json({message:"user not found"})
    //send res
    res.status(201).json({message:"user",playload:userObj})
  });

  //update user by id
  userApp.put("/users/:id",verifyToken,async(req,res)=>{
    //get modified user from req
    const modifiedUser=req.body;
    const uid=req.params.id;
    //find user by id and update
    const updatedUser=await userModel.findByIdAndUpdate(uid,
      {$set:{...modifiedUser}},{new:true,runValidators:true});
    //send res
    res.status(200).json({message:"user modified",playload:updatedUser})
  })

  //delete user by id
  userApp.delete("/users/:id",async(req,res)=>
  {
   // const deleteUser=req.body;
    const uid=req.params.id;
    const deleteUser =await userModel.findByIdAndDelete(uid)
    if(!deleteUser)
      return res.status(404).json({message:"user not found"})
    res.status(200).json({message:"user deleted",playload:deleteUser})
  })


  //Status code-to make the code more reliable
  //200-successfull completion on any operation except create
  //201-creation  success or not
  //400-bad request(client side mistakes)
  //401-unauthorised
  //404-if resource is not found
  //500-server side error
