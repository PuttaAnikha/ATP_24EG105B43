import {useContext} from 'react'
import {counterContextObj} from '../context/ContextProvider';
import { useCounterStore } from '../store/CounterStore';
function Home() {
  let {newCounter,incrementCounter,decrementCounter,reset}=useCounterStore(); 
 const {counter,changeCounter,counter1,changeCounter1}=useContext(counterContextObj);

  return (
    <div>
      <h1 className='text-4xl'>Counter:{counter}</h1>
      <button onClick={changeCounter} className='bg-blue-800'>Change</button>
       <h1 className='text-4xl'>Increment Counter:{newCounter}</h1>
      <button onClick={incrementCounter} className='bg-blue-800'>Change</button>
      9                                                                                                                                              
    </div>
  )
}

export default Home