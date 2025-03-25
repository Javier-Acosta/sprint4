import { useState } from 'react'
import Heroes from './components/Heroes';




function App() {
 


  return (
    <>
    <div className='flex justify-center items-center bg-purple-800 text-white p-2'>
    <h1 className=' text-xl'> Heroes</h1>

    </div>

      <Heroes/>
 
    </>
  )
}

export default App
