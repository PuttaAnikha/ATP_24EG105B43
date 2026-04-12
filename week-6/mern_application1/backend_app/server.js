import exp from "express";
import { config} from "dotenv";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import { empApp } from "./API/employeeAPI.js";
import cors from "cors";
config();
const app=exp();
app.use(cors({
    origin:["http://localhost:5173"]
}))
//assign port number
const port=process.env.PORT ||4000
//add body parser
app.use(exp.json())
//addd cookie parser middleware
app.use(cookieParser())
app.use("/emp-api",empApp)
//connect to DB server
 async function connectDB() {
    try{
        await connect(process.env.DB_URL);
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
 app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});