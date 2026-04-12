import {useState} from "react";
function Counter(){
    //state
        const [count,setCount]=useState(0);//this is the array =>[state,function to modify the state]
        //event handler functions to modify the state
       const increment=()=>{
        setCount(count+1);
       };
       const decrement=()=>{
        setCount(count-1);
       };
       const reset=(value)=>{
        setCount(value);
       }
       return(
        <div className="text-center p-10 border">
            <h1>Count:{count}</h1>
            <button onclick={increment} className="m-5 p-3.5 bg-amber-300">+</button>
            <button onclick={decrement} className="m-5 p-3.5 bg-amber-300">-</button>
            <button onclick={()=>reset(0)} className="m-5 p-3.5 bg-amber-300">reset</button>
        </div>
       )
}
export default Counter