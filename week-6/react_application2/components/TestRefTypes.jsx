import { useState } from "react";
function TestRefTypes()
{
const[user,setUser]=useState({username:"ravi",age:21,city:"hyderabad"})
const[marks,setMarks]=useState([10,20,30]);
//update user state
const updateUser=()=>{
    setUser({...user,username:"Anikha0",age:19
    });
};
//update marks
const updateMarks=()=>{
    setMarks([40, ...marks]);
}
return(
    <div>
       <p >Username:{user.username}</p>
       <p >age:{user.age}</p>
       <p >city:{user.username}</p>
</div>
)};
export default TestRefTypes;