import { useForm } from "react-hook-form";
import { useState } from "react";

function Userform() {
  const [users, setUsers] = useState([]);
  const {
    register, //to register form fields
    handleSubmit, //to handle submissions
    formState: { errors } //to handle validations
  } = useForm();

  //form submit functions
  const onFormSubmit = (newUserObj) => {
    setUsers([...users, newUserObj]);
  };

  return (
    <div className="p-5">
      {/*create user form */}
      <div className="bg-blue-200 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-6">Create User Form</h1>
        <form
          className='space-y-4'
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <div className="mb-3">
            {/*FirstName */}
            <label htmlFor="firstName" className="block text-lg font-medium">FirstName</label>
            <input
              type="text"
              {...register("firstName", {
                required: true,
                validate: (v) => v.trim().length != 0 || "white space is not valid"
              })}
              id="firstName"
              className='border w-full p-3 rounded'
            />
            {errors.firstName?.type === "required" && <p className='text-red-600'>name required</p>}
            {errors.firstName?.type === "validate" && <p className='text-red-600'>{errors.firstName.message}</p>}
          </div>

          {/*email */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              id="email"
              className='border w-full p-3 rounded'
            />
            {errors.email?.type === "required" && <p className='text-red-600'>email required</p>}
          </div>

          {/*DOB */}
          <div>
            <label htmlFor="DOB" className="block text-lg font-medium">Date Of Birth</label>
            <input
              type="date"
              {...register("DOB", {
                required: true,
              })}
              id="DOB"
              className='border w-full p-3 rounded'
            />
            {errors.DOB?.type === "required" && <p className='text-red-600'>DOB is required</p>}
          </div>

          {/*Submit button */}
          <div className="text-center">
            <button type='submit' className='bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors'>Add User</button>
          </div>
        </form>
      </div>

      {/*table to display users */}
      <div className="bg-amber-100 mt-10 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-6">List Of Users</h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3 text-left">First Name</th>
                <th className="border p-3 text-left">Email</th>
                <th className="border p-3 text-left">Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {users.map((userObj, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="border p-3">{userObj.firstName}</td>
                  <td className="border p-3">{userObj.email}</td>
                  <td className="border p-3">{userObj.DOB}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && <p className="text-center mt-4 text-gray-500">No users added yet.</p>}
        </div>
      </div>
    </div>
  );
}

export default Userform;
