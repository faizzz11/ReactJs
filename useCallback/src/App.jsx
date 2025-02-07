import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setadjective] = useState("sexyyyy");

// without useCallback  // console.log krke dekhna difference malum chalega with & w/o ka
/* const GetAdjective =()=>
{
  setadjective("wowwww");
  return   "Dabaooo Bc " + count;
}
*/

  // har ek function ek durse se alag hota hai chahe woh 100% same ho aur dikh rha ho isilye woh baar baar re render karega call hone pe chahe hum memo use kr le fir bhi, isi problem ko overcome krne ke liye useCallback ko istemal krte hai, useCallback usko(in this case function ko) free kr deta hai
 //with useCallback
  const GetAdjective = useCallback(
    () => {
     // setadjective("wowwww");
      return  "Dabaooo Bc " + count;
    },
    [/* count */], // agar mei isme count daldu toh yeh mtlb niklega ki tabtak freeze karo jab tak count change nhi hota, warna freeze hi rehne do 
  )


  return (
    <>
    <Navbar adjective={adjective} GetAdjective={GetAdjective}/>
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
