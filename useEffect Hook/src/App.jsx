import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [Color, setColor] = useState(0)

 /* // case 0: run on every render
  useEffect(() => {
    alert(" Hiii I will run on every renderrrr")
  })

    // case 1: run only on First render
    useEffect(() => {
      alert(" Hiii I will run only on First renderrrr")
    }, [])

    // case 2: run only on cetain values changes 
      useEffect(() => {
        alert(" Hiii I will run only if count was changedddd")
      }, [count]) 
      
      //cse 3: example of clean up function
        useEffect(() => {
     alert("tmkb")
   
     return () => {
       alert("clean up functionnnn// function was unmounted // example agar koi component lets say navbar ko humne conditional rendering mei hata diya toh yeh alert aayega ")
     }
   }, [])
   
      */
 


  useEffect(() => {
    alert("count increase huaaaa");
    setColor(Color + 1)

  }, [count]);

  return (
    <>
    <Navbar color={"grey and " + "blue  " + Color }/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
