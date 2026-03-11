import exp from 'express'
import { productModel } from '../models/productModel.js'
export const productApp=exp.Router()
//REST API with below operations
  //   a. Create product
  productApp.post("/products",async(req,res)=>
{
//get new product obj from req
const newProduct=req.body;
//create new product document
const newProudctDocument=new productModel(newProduct)
//save
const result=await newProudctDocument.save()
//show res
//console.log(result)
res.status(200).json({message:"user created",playload:result})
})
    // b. Read all products
    productApp.get("/products",async(req,res)=>
    {
      //read all products from
         const productList= await productModel.find()
         //send res
         res.status(201).json({message:"products",playload:productList})
    });
     //c. Read a product by productId
     productApp.get("/products/:id",async(req,res)=>
    {
      const pid=req.params.id
          //find product by id
         const prodObj= await productModel.findById(pid)
         //if product not found
         if(!prodObj)
          return res.status(404).json({message:"product not found"})
          //send res
          res.status(201).json({message:"product",playload:prodObj})
    });
//     d. Update a product by productId
          productApp.put("/products/:id",async(req,res)=>{
              //get modified product from req
              const modifiedProd=req.body;
              const pid=req.params.id;
              //find product by id and update
              const updatedProd=await productModel.findByIdAndUpdate(pid,
                {$set:{...modifiedProd}},{new:true,runValidators:true});
              //send res
              res.status(200).json({message:"product modified",playload:updatedProd})
            });
  //   e. Delete a product by productId
        productApp.delete("/products/:id",async(req,res)=>
         {
          // const deleteUser=req.body;
           const pid=req.params.id;
           const deleteProduct =await productModel.findByIdAndDelete(pid)
           if(!deleteProduct)
             return res.status(404).json({message:"product not found"})
           res.status(200).json({message:"product deleted",playload:deleteProduct})
         });
       