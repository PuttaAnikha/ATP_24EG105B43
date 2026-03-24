import {useState} from "react";
function Counter(){
    
        const [count,setCount]=useState(0);
       const increment=()=>{
        setCount(count+1);
       };
       const decrement=()=>{
        setCount(count-1);
       };
       return(
        <div className="text-center p-10 border">
            <h1>Count:{count}</h1>
            <button onclick={increment} className="m-5 p-3.5 bg-amber-300">+</button>
            <button onclick={decrement} className="m-5 p-3.5 bg-amber-300">-</button>
        </div>
       )
}
export default Counter