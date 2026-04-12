import {useContext} from 'react'
import { counterContextObj } from '../context/ContextProvider'

function EditCounter4() {
  const {counter,incrementCounter,decrementCounter}=useContext(counterContextObj);
  return (
    <div className='flex flex-col items-center gap-6'>
      <div className='relative'>
        <div className='absolute -inset-1 bg-amber-500 rounded-full blur opacity-25'></div>
        <div className='relative bg-slate-900 border border-slate-700 w-24 h-24 rounded-full flex items-center justify-center'>
          <div className='text-4xl font-bold text-amber-400'>{counter}</div>
        </div>
      </div>
      
      <div className='flex gap-4 w-full'>
        <button 
          onClick={decrementCounter}
          className='flex-1 py-3 px-4 bg-slate-700 hover:bg-slate-600 rounded-xl font-bold transition-all active:scale-95 border border-slate-600'
        >
          -
        </button>
        <button 
          onClick={incrementCounter}
          className='flex-1 py-3 px-4 bg-amber-600 hover:bg-amber-500 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-amber-500/20'
        >
          +
        </button>
      </div>
    </div>
  )
}

export default EditCounter4