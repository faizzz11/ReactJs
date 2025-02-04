import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [ShowFinished, setShowFinished] = useState(true)

  //isme hume jo todos array hai usko string mei convert krke local strg mei save kr rhe hai
  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
// idhar hum useEffect use krke jo data local strg mei hai woh hum "todoString" naam ke variable mei store kr rhe, aur agar local storage mei kuch value ya data hoga toh woh string ko wapis hum array mei dal denge called as todos fir setTodos mei hum wapas woh todos array ko dal denge toh refresh hone pur woh sara data hume wapas mil jayega 
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      setTodos(todos)
    }
  }, [])
  
//add button ko sambhalega
 const handleAdd = () =>{
  setTodos([...todos,{id:uuidv4(), todo, isCompleted : false}])
  setTodo("")

  saveToLS()
 }
//edit button ko sambhalega
 const handleEdit = (e, id) =>{
  let edit= todos.filter(i=> i.id === id)
  setTodo(edit[0].todo)
  let newTodos = todos.filter(item =>{
    return item.id !== id
   });
   setTodos(newTodos)
   
  saveToLS()
 }
 // delete button ko sambhalega
 const handleDlt= (e, id) =>{
  let newTodos = todos.filter(item =>{
   return item.id !== id
  });
  setTodos(newTodos)

  saveToLS()
 }
//input ko sambhalega
 const handleChange= (e) =>{
 setTodo(e.target.value)
 }
//checkbox ko sambhalega
 const handleCheckbox= (e) =>{
  let id = e.target.name;
  let index = todos.findIndex(item=>{
    return item.id === id;
  })
  let newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted
  setTodos(newTodos)

  saveToLS()
 }

 const ToggleFinished= (e) =>{
  setShowFinished(!ShowFinished)
  }


  return (
  <>
   <Navbar />
   <div className="mx-3 md:container md:mx-auto bg-gray-700 text-white rounded-xl my-4 p-5 min-h-[87vh] mt-7 md:w-7/10 ">
   <h1 className="font-bold text-center text-2xl">ZenTask - Your Daily Schedule Manager</h1>
    <div className="addTodo my-5 flex flex-col gap-4 items-center">
      <h3 className='text-lg font-bold '>Add a Todo</h3>
      <input onChange={handleChange} value={todo} className='bg-white text-black w-full rounded-xl p-3' type="text" placeholder='eg:- Watch Reels' />
      <button onClick={handleAdd} disabled={todo.length<2} className='btn bg-orange-600 hover:bg-orange-800 disabled:bg-orange-600 p-3 py-1 rounded-md font-bold'>Save</button>
      </div>
      <input className='my-4' id='show' onChange={ToggleFinished} type="checkbox" checked={ShowFinished} /> 
         <label className='mx-2' htmlFor="show">Show Finished</label> 
         <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
   <h1 className="text-2xl font-bold tracking-wider text-orange-600">
    Our Tasks For Today!!!
  </h1>
  <div className="todos">
    {todos.length===0 && <div className='m-5'>No Todo To Display</div>}
    {todos.map(item=>{
      return (ShowFinished || !item.isCompleted) && <div key={item.id} className="todo flex my-3 justify-between items-start">
      <div className="flex gap-5 flex-1 min-w-0">
        <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id=""/>
        <div className={`break-words ${item.isCompleted ? "line-through" : ""} w-[70%] `}>
         <h1 className='font-bold tracking-wide'>{item.todo}</h1>
        </div>
      </div>
      
      {/* Buttons */}
      <div className="buttons flex">
        <button onClick={(e) => {handleEdit(e, item.id)}} className="bg-orange-600 hover:bg-orange-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"> 
          <FaEdit />
        </button>
        <button onClick={(e) => {handleDlt(e, item.id)}} className="bg-orange-600 hover:bg-orange-800 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">
          <MdDelete />
        </button>
      </div>
    </div>
    
    
    
      })}
  </div>
   </div>
    
  </>
  )
}

export default App