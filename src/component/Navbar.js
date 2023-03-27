import React from 'react'
import { Link } from 'react-router-dom';
import logoPic from "../images/Logo/logo.png";

const Navbar = () => {
  return (
    <div className='bg-purple-900 text-white flex justify-between items-center p-5 py-0'>
        <div>
          <img src={logoPic} alt="Logo" className='w-24 h-24' />
        </div>
        <div className='flex gap-8'>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/about">About Us</Link></span>
            <span><Link to="/login">Login</Link></span>
        </div>
    </div>
  )
}

export default Navbar