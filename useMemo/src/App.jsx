import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const num = new Array(30_000_000).fill(0).map((_,i)=>{
  return{
    index: i,
    isMagical: i=== 29_156_345
  }
})

function App() {
  const [count, setCount] = useState(0)
const [Numbers, setNumbers] = useState(num)

//const Magical = Numbers.find(item => item.isMagical === true)
const Magical = useMemo(() =>  Numbers.find(item => item.isMagical === true), [Numbers]) // betwweenn re render humari yeh value baar baar compute nhi hogi isilye useMemo ka use kiya hai agar nhi krte toh lvde lag jaate compute krte krte  // aur agar hum chahte hai ki woh magical memo chnage ho toh woh dusre argument mei daldo jissse woh value change dependent hai jaise humne dursre arg mei [numbers] diya hai waise , iska mtlb agar Numbers change hoga toh hi woh memo re render hogaaaaa


  return (
    <>
      <div>
        <span>Magical numberrr is {Magical.index}</span>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1);
        if(count ==10){
          setNumbers(new Array(10_000_000).fill(0).map((_,i)=>{
            return{
              index: i,
              isMagical: i=== 9_000_345
            }
          }))}
        }
        }>
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
