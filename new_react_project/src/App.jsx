import { useState } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [val, setVal] = useState(0)
  return (

<div className="faiz">
  <Navbar logoText="logoooooo" />
  <h1 className="value">hey faizzz, your age is{' '}{val}</h1>
   <button onClick={()=>{setVal(val + 1)}} className="btn">click me</button>
   <Footer />
</div>


  )
}

export default App
