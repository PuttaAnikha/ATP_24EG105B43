
import { useState, useEffect } from "react";
import { get } from "react-hook-form";
import { useNavigate } from "react-router";
import axios from "axios";
function ListOfEmps() {
  const [emps, setEmps] = useState([]);
const navigate=useNavigate();

const goToEmployee=(empObj)=>{
  //navigate to /employee along with selected employee object
  navigate("/employee",{state:empObj});
}
const goToEditEmployee=(empObj)=>{
  //navigate to /editemployee along with selected employee object
  navigate("/editemployee",{state:empObj});
}
const deleteEmpoyeeById=async(id)=>{
  let res=await axios.delete(`http://localhost:4000/emp-api/employees/${id}`);
  if(res.status===200){
    //get latest emps data after deleteing
    getEmps();
  }
}
//get all employees
async function getEmps() {
      let res = await axios.get("http://localhost:4000/emp-api/employees");
        if(res.status === 200){
          let resObj = res.data;
          setEmps(resObj.payload);
        }
      }
      //get all emps on component loading
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
 <h1 className="text-4xl text-center">List of Employees</h1>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 shadow-2xl lg:grid-cols-4 p-6 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className="text-center bg-white p-5 shadow-blue-950 rounded-2xl">
            <p>{empObj.name}</p>
            <p>{empObj.email}</p>
            {/*3button */}
            <div className="gap-2 flex justify-around">
              <button onClick={()=>goToEmployee(empObj)} className="bg-green-400 gap-9 p-2 rounded-2xl text-shadow-indigo-50">View</button>
              <button onClick={()=>goToEditEmployee(empObj)} className="bg-yellow-300 gap-9 p-2 rounded-2xl text-shadow-indigo-50">Edit </button>
                <button onClick={()=>deleteEmpoyeeById(empObj._id)} className="bg-red-400 p-2 gap-4 rounded-2xl text-shadow-indigo-50">Delete</button>
              </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ListOfEmps