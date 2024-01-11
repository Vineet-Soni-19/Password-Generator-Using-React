import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength]= useState(8);
  const [password, setPassword]=useState("");
  const [numberAllowed, setNumberAllowed]=useState(true);
  const [charAllowed, setCharAllowed]=useState(true);

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_+-";
    for(let i=1; i<=length; i++){
      let char=Math.floor(Math.random()*str.length + 1);
      pass+=str.charAt(char);
    }

    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])

  const passwordRef=useRef(null);
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
},[password])

  return (
    <>
      <div className='flex justify-center items-center min-h-screen'>
      <div className='w-full max-w-lg rounded-lg shadow-4xl bg-[#DCF2F1]'>
        <h1 className='text-[#0F1035] pt-4'>Password Generator</h1>
        <div className='flex mx-2 px-2 py-5'>
          <input
            className='w-full rounded-lg pl-4 py-2 mx-2 text-white bg-[#0F1035]'
            type='text'
            value={password}
            placeholder='Password'
            readOnly
            />
            <button 
            onClick={copyPasswordToClipboard}
            className=' px-5 bg-blue-600 text-white rounded-lg mx-2 hover:bg-[#7FC7D9] hover:text-[#0F1035] active:text-[#0F1035] active:outline' >Copy</button>
        </div>
        <div className='flex mx-5 pb-3 text-[#0F1035] justify-evenly'>
          <div className='px-2'>
          <input 
            type="range" min={6} max={20} 
            className='cursor-pointer'
            id='passlength'
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label htmlFor="passlength" className='px-1'>Length: {length}</label>
          </div>
          <div>
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }}
           />
           <label htmlFor="numberInput"
           className=' px-1'>Numbers</label>
          </div>
          <div>
          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }}
           />
           <label htmlFor="charInput"
           className=' px-1'>Special Characters</label>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
