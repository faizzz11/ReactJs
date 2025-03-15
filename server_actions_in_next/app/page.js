"use client"
import { submitAction } from "@/actions/form.js";
import { useRef } from "react";

export default function Home() {
let ref = useRef()
 
  return (
<div className="w-3/10 mx-auto my-13 bg-amber-500 ">
  <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
    <div className="mt-2">
      <label className="mx-2" htmlFor="name">Namee</label>
      <input name="name" id="name" className="text-black bg-white" type="text" />
    </div>
    <div className="mt-2">
      <label className="mx-1.5" htmlFor="add">Address</label>
      <input name="add" id="add" className="text-black bg-white" type="text" />
    </div>
    <div>
      <button className="bg-blue-600 m-2 p-1.5 cursor-pointer">submit</button>
    </div>
  </form>
</div>
  );
}
