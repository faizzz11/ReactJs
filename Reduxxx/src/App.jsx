import { useState } from 'react'
import './App.css'
import Navbar from './C/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, multiply } from './Redux/couter/counterSlice'


// redux store is single source of truth // jaha pe humari "state" stored hoti hai.

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar />
      <div><button onClick={() => dispatch(increment())}>+</button>
        filhal yeh body count hai mera {count}
        <button onClick={() => dispatch(decrement())} >-</button>
        <button onClick={() => dispatch(multiply())} >*</button>
        <button onClick={() => dispatch(incrementByAmount(11))}>Amt</button>
      </div>
    </>
  )
}

export default App
