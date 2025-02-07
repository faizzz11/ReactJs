import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, GetAdjective}) => {
  console.log("navar is randdd")
  return (
    <div>
      i am a {adjective} navbar
      <button > {GetAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
