import {useForm} from 'react-hook-form'
import { useState ,useContext} from 'react'
import { useNavigate } from "react-router";
import {counterContextObj} from '../context/ContextProvider';
function CreateEmp() {
  
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState("");
  const navigate=useNavigate();
  
const {register,handleSubmit,formState:{errors}}=useForm()
//form submit
const onFormSubmit=async(newEmpObj)=>{
  console.log(newEmpObj)
  //make http post request  
  try{
    setLoading(true);
  let res=await fetch("http://localhost:4000/emp-api/employees",{
  method:"POST",
  headers:{"Content-Type": "application/json"},
  body:JSON.stringify(newEmpObj),
  });
  if(res.status===201){
   //logic to navigate employees component programatically
   navigate("/listofemps");
 }
  else{
    let errorRes=await res.json()
    //console.log("error responce is ", errorRes);
    throw new Error(errorRes.reason)
  }
}
  catch(err){
      setError(err.message);
  }
  finally{
    setLoading(false);
  }
 }
 console.log(error);

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div>
      <h1 className='text-5xl text-center text-gray-500'> Create New Employees</h1>
      <form className='max-w-md mx-auto mt-10' onSubmit={handleSubmit(onFormSubmit)}>
       <input 
       type='text' 
       placeholder='enter name' 
       {...register("name")} 
       className='mb-3 border p-3 w-full rounded-2xl '/>
       <input 
       type='text' 
       placeholder='enter email' 
       {...register("email")} 
       className='mb-3 border p-3 w-full rounded-2xl '/>
       <input 
       type='tel' 
       placeholder='enter PhoneNumber' 
       {...register("mobile")} 
       className='mb-3 border p-3 w-full rounded-2xl '/>
      <input 
       type='text' 
       placeholder='enter designation' 
       {...register("designation")} 
       className='mb-3 border p-3 w-full rounded-2xl '/>
       <input 
       type='text' 
       placeholder='enter company name' 
       {...register("companyName")} 
       className='mb-3 border p-3 w-full rounded-2xl '/>
       <button type='submit' className='bg-blue-500 text-center  mb-2 p-2'>Add User</button>
      </form>
    </div>
  )
}

export default CreateEmp