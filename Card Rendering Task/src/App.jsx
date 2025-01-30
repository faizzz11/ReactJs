import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Data from './Components/Data';

function App() {


  return (
    <>
      <Navbar />
      
      <div className="container mx-auto px-5 py-10">
        <div className="flex flex-wrap -m-4">
          {Data.map((EachData) => (
            <Card key={EachData.id} UID={EachData.userId} heading={EachData.title} desc={EachData.body} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

{/*  agar hum ko API fetch krna hai toh aise bhi kr skte bina data.js file banaye.......
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
    <Navbar/> 
      <div className="container">
       {cards.map((card)=>{
        return <div key={card.id} className="card">
          <h1>{card.title}</h1>
          <p>{card.body}</p>
          <span>By: UserId: {card.userId} </span>
        </div>

       })}
        
      </div>

    </>
  )
}

export default App  */}