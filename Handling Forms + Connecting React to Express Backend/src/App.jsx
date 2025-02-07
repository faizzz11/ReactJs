import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const [count, setCount] = useState(0)
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

const delay =(d)=>{
  return new Promise((reslove,reject)=>{
    setTimeout(() => {
      reslove()
    }, d*1000);
  })
}

const onSubmit = async (data) => {
  // await delay(2) 
  let r = await fetch("http://localhost:3000/", {method:"POST", headers: {"Content-Type": "application/json",}, body:JSON.stringify(data)})
  let res = await r.text()
  console.log(data, res)
  //   if (data.username !== "faizzz") {
  //       setError("myForm", {message:"faizzz naam hona chahiye teraaa"})
  //   }
  //   if(data.username === "maurya"){
  //   setError("Niggaa", {message:"tmkc kalu"})
  // }
};

  return (
    <>
    {isSubmitting && <div>Submittinggg..............</div>}
    <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='faizzz' {...register("username", { required: {value:true, message:"lvde kuch naam toh hoga"}, minLength: {value:3, message:"minimum 3 character is required"}, maxLength: {value:10, message:"maximum 10 character only"} })} type="text" />
        {errors.username && <div className='red'>{errors.username.message}</div> }
        <br />
        <input placeholder='faizz@123' {...register("password", { required: {value:true, message:"lvde kuch passwordd toh dal"}, minLength: {value:5, message:"minimum 5 character password is required"}, maxLength: {value:15, message:"maximum 15 character password only"} })} type="password" /><br />
        {errors.password && <div className='red'>{errors.password.message}</div> }
        <input disabled={isSubmitting} type="submit" value="submit" /> 

        {errors.myForm && <div className='red'>{errors.myForm.message}</div> }
        {errors.Niggaa && <div className='red'>{errors.Niggaa.message}</div> }
      </form>

    </div>
    </>
  )
}

export default App
