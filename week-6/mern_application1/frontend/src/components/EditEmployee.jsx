import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router";
import axios  from "axios";
function EditEmployee() {
  const{register,handleSubmit,formState={errors},setValue}=useForm();
  const {state}=useLocation();
  const Navigate=useNavigate();

  useEffect(()=>{
    setValue("name",state.name);
    setValue("email",state.email);
    setValue("mobile",state.mobile);
    setValue("designation",state.designation);
    setValue("companyName",state.companyName);
  },[]);
  const saveModeifiedEmp=async(modifiedEmp)=>{
    //console.log(modifiedEmp);
    const res=await axios.put(`http://localhost:4000/emp-api/employees/${state._id}`, modifiedEmp);
    if(res.status===200){
      Navigate("/listofemps");
    }
  }
  return (
    <div>
      <h1 className="text-4xl text-center">Edit Employee</h1>
      <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(saveModeifiedEmp)}>
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
       <button type='submit' className='bg-blue-500 text-center  mb-2 p-2'>edit User</button>
   </form>
    </div>
  )
}

export default EditEmployee