import exp from "express";
import { config} from "dotenv";
config();
import {employeeModel} from '../models/employeeModel.js'
export const empApp=exp.Router();
//route to create a employee
empApp.post("/employees",async(req,res)=>{
    //get new user from the req
    const newEmp=req.body;
    //create new emp document
    const newEmpDocument=new employeeModel(newEmp);
    //save
      const result=await newEmpDocument.save()//document will be created inside the database.
      console.log(result)
      //send res
      res.status(201).json({message:"employee created"})
})
//route to read all employees
empApp.get("/employees",async(req,res)=>{
  let employeeList=await employeeModel.find();
   res.status(200).json({message:"employees",payload:employeeList});
})
//route to edit the employee
empApp.put("/employees/:id",async(req,res)=>{
  //get modified employee from req
      const modifiedemployee=req.body;
      const eid=req.params.id;
      //find user by id and update
      const updatedEmployee=await employeeModel.findByIdAndUpdate(eid,
        {$set:{...modifiedemployee}},
        {returnDocument:"after"});
      //send res
      res.status(200).json({message:"employee modified",playload:updatedEmployee})
})
//route to delete a employee
empApp.delete("/employees/:id",async(req,res)=>
  {
   // const deleteUser=req.body;
    const eid=req.params.id;
    const deleteemp =await employeeModel.findByIdAndDelete(eid)
    if(!deleteemp)
      return res.status(404).json({message:"employee not found"})
    res.status(200).json({message:"employee deleted",playload:deleteemp})
  })