import React from 'react'
import EditCounter1 from './components/EditCounter1'
import EditCounter2 from './components/EditCounter2'
import EditCounter3 from './components/EditCounter3'
import EditCounter4 from './components/EditCounter4'
function App() {
  return (
   <div className='min-h-screen bg-slate-900 text-white p-8'>
      <header className='mb-10 text-center'>
        <h1 className='text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2'>
          React Context Dashboard
        </h1>
        <p className='text-slate-400'>Real-time state synchronization across multiple components</p>
      </header>

      <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
        <div className='bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all'>
          <h2 className='text-xl font-semibold mb-4 text-blue-400'>Counter Explorer 1</h2>
          <EditCounter1 />
        </div>

        <div className='bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-700 hover:border-emerald-500/50 transition-all'>
          <h2 className='text-xl font-semibold mb-4 text-emerald-400'>Counter Explorer 2</h2>
          <EditCounter2 />
        </div>

        <div className='bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-700 hover:border-purple-500/50 transition-all'>
          <h2 className='text-xl font-semibold mb-4 text-purple-400'>Counter Explorer 3</h2>
          <EditCounter3 />
        </div>

        <div className='bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-700 hover:border-amber-500/50 transition-all'>
          <h2 className='text-xl font-semibold mb-4 text-amber-400'>Counter Explorer 4</h2>
          <EditCounter4 />
        </div>
      </main>
    </div>
  )
}

export default App