import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setForm] = useState({email:"",phone:""})
  const [Input, setInput] = useState("faizzz")
  const handleClick = () => {
     alert("aaahhhhhhhhhhhh")
  }
  const handleMO = () => {
    document.querySelector(".cyan").innerHTML = "nahhhhh mt karo yehhh";
    document.querySelector(".cyan").style.backgroundColor="red";
    console.log(Input)
 }
 const handleChange = (e) => {
  setInput(e.target.value)
}
const handleFormChange = (e) => {
  setForm({...form,[e.target.name]: e.target.value})
  console.log(form)
}
 const handleMouseOut =()=>{
  document.querySelector(".cyan").innerHTML = "i am cyan d̶i̶c̶c̶k̶k̶k̶k̶ divvv";
  document.querySelector(".cyan").style.backgroundColor="cyan";
 }

  return (
  <>
  <div className="btn">
    <button onClick={handleClick}>
      click me......
    </button>
    </div>
    <div className="cyan" onMouseOver={handleMO} onMouseOut={handleMouseOut}>
      i am cyan d̶i̶c̶c̶k̶k̶k̶k̶ divvv
    </div>
    <div className="input">
    <input type="text" name='text' value={Input} onChange={handleChange} style={{"margin": "10px"}}/>

   
    <input type="text" name='email' value={form.email} onChange={handleFormChange} style={{"margin": "10px"}}/>
    <input type="text" name='phone' value={form.phone} onChange={handleFormChange} style={{"margin": "10px"}}/>
    </div>
    </>
  )
}

export default App
