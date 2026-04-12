import {useForm} from 'react-hook-form';
function Formdemo(){
    const{register,//to register form fields
        handleSubmit,//to handle submissions
        formState:{errors}//to handle validations
    }=useForm();
    //form submit functions
    const onFormSubmit=(obj)=>{
        console.log(obj);
    }
    return(
        <div>
            <h1 className='text-center text-4xl '>Form Demo</h1>
            <form className='max-w-md mx-auto mt-10' 
            onSubmit={handleSubmit(onFormSubmit)}>
               { /*username*/}
                <div className='mb-3 '>
                    <label htmlFor='username'>Username</label>
                    <input  
                      type="text" 
                      {...register("username",{
                        required:"username required",
                       // minLength:4
                       validate:(v)=>v.trim().length!=0||"white space is not valid"
                    })}
                    id="username"
                     className='border w-full p-3'/>
                     {/*username validation error message*/}
                     {errors.username?.type==="required" && <p className='text-red-600'>{errors.username.message}</p>}
                     {errors.username?.type==="minLength" && <p className='text-red-600'>{errors.username.message}</p>}
                      {errors.username?.type==="validate" && <p className='text-red-600'>{errors.username.message}</p>}
                </div>
                {/*email */}
                <div className='mb-3'>
                    <label htmlFor='email'>email</label>
                    <input type="text"
                     {...register("email")}
                    id="email"
                     className='border w-full p-3'/>
                     
                </div>
                <button type='submit' className='bg-amber-200'>Submit</button>
            </form>
        </div>

    )
}
export default Formdemo;