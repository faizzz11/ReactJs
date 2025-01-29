import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setshowBtn] = useState(false)
  const [Todoss, setTodoss] = useState([{
    id:1,
    title: "Todo 1",
    desc: "Desc 1"
  },
  {
    id:2,
    title: "Todo 2",
    desc: "Desc 2"
  },
  {
    id:3,
    title: "Todo 3",
    desc: "Desc 3"
  }])

const Todo =({todo}) =>{
  return(<>
  <div className="m-4 border-2 border-amber-300">
  <div className="todo">{todo.title}</div>
  <div className="todo">{todo.desc}</div>
  </div>
  </>
)
}
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     {/* showBtn? <button >show button is trueee</button>:  */} 
     {showBtn && <button >I will showup only when i am trueee</button>}
     {Todoss.map(item =>{
         return <Todo key={item.id} todo={item}/>
         })}
      <div className="card">
      <button onClick={()=>{
        setshowBtn(!showBtn);
      }}>
         show hidden button 
        </button>
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
