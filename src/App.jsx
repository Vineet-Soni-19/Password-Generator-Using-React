import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg shadow-lg bg-[#DCF2F1]'>
        <h1 className='text-[#0F1035] pt-4'>Password Generator</h1>
        <div className='flex mx-2 px-2 py-5'>
          <input
            className='w-full rounded-lg pl-4 py-2 mx-2 text-white bg-[#0F1035]'
            type='text'
            // value={password}
            placeholder='Password'
            readOnly
            />
            <button className=' px-5 bg-blue-600 text-white rounded-lg mx-2 hover:bg-[#7FC7D9] hover:text-[#0F1035] active:text-[#0F1035] active:outline' >Copy</button>
        </div>
        <div className='flex mx-7 pb-3 text-[#0F1035] justify-evenly'>
          <div className='px-2'>
          <input 
            type="range" min={6} max={20} 
            className='cursor-pointer'
            id='length'
            // value={length}
          />
          <label htmlFor="length" className='px-1'>Length</label>
          </div>
          <div>
          <input 
            type="checkbox"
            defaultChecked={true}
            id='numberInput'
           />
           <label htmlFor="numberInput"
           className=' px-1'>Numbers</label>
          </div>
          <div>
          <input 
            type="checkbox"
            defaultChecked={true}
            id='charInput'
           />
           <label htmlFor="charInput"
           className=' px-1'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
