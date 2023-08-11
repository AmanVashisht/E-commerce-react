import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-gradient-to-r from-[#355af3] to-[#435bf9] w-[100vw] h-[10vh] px-2 flex justify-between border-b-2 border-black'>
        <h1 className='text-white font-bold text-3xl py-2 px-3'>Virtual Complex</h1>
        <ul className='flex text-white gap-20 py-4'>
          <Link to="/home"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/cart"><li><i className="fa-solid fa-cart-shopping text-3xl"></i></li></Link>
          <Link to="/profile"><li><i className="fa-regular fa-user text-3xl"></i></li></Link>
        </ul>
        <input type='text' className='m-2 rounded-lg p-4'  placeholder='Search...'/>
    </div>
  )
}

export default Navbar
