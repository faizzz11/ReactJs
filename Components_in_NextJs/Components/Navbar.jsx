import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-orange-600 h-12 py-2 px-4">

      <div className="logo font-bold text-lg sm:text-xl text-center tracking-wider lg:pl-[170px] md:pl-[90px]">
        ZenTask
      </div>

      <ul className="hidden sm:flex space-x-4 text-md md:text-base tracking-widest lg:pr-[135px] md:pr-[60px] ">
        <li className="cursor-pointer hover:font-extrabold transition-all duration-500 hover:text-slate-300">Home</li>
        <li className="cursor-pointer hover:font-extrabold transition-all duration-500 hover:text-white">About</li>
        <li className="cursor-pointer hover:font-extrabold transition-all duration-500 hover:text-white">Contact</li>
      </ul>

      <div className="block sm:hidden">
        <button className="text-black text-2xl">☰</button>
      </div>
    </nav>
  );
};


export default Navbar
