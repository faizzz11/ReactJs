import React from 'react'

const Navbar = () => {
  return (
    <div className='nav bg-amber-500'>
      <ul className='flex flex-wrap space-x-1 h-12 text-center content-center justify-center tracking-widest gap-10'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar