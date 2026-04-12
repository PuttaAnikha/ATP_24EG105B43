import { useEffect, useState } from "react";
function APIdemo(){
    console.log("Api demo rendered");
    let[users,setUsers]=useState([]);
    let[loading,setLoading]=useState(false);
    let[error,setError]=useState(null);
  useEffect(()=>{
    //a function to make api request
    async function getData(){
        //set loading to true
        setLoading(true);
        try{
            let res=await fetch("https://jsonplaceholder.typicode.com/comments");
            let userList=await res.json();
            //update state
            setUsers(userList);
        }
        catch(err){
            console.log("err is:",err);
            //update error state
            setError(err);
        }
        finally{
            setLoading(false);
        }
    }
getData();
  },[]);
//deal with loading phase
if(loading){
    return <p className="text-center text-7xl">Loading....</p>
}
//deal with error state
if(error!=null){
    return <p className="text-red-600 text-center">{err.message}</p>
}
   return(
    <div>
       <h1 className="bg-amber-600 text-4xl text-center ">Users List</h1>
       <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((userObj)=>(
            <div key={userObj.id}>
            <p>{userObj.name}</p>
            <p>{userObj.email}</p>
            </div>
        ))}
       </div>
    </div>
   )
}
export default APIdemo