"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const [Count, setCount] = useState(0)
  return (
  <>
  <div>
    i am a component {Count}
    <button onClick={()=> setCount(Count + 1)}>click</button>
  </div>
  </>
  );
}
