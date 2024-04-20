import React from 'react'
import logo from "../assets/logo.avif"
import { MdShoppingCart } from "react-icons/md";
const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-11/12 h-[100px]'>
        <div className='w-[100px]'>
            <img src={logo} alt="logo"  />
        </div>
        <div className='flex gap-7'>
            <p>Home</p>
            <MdShoppingCart />
        </div>
    </div>
  )
}

export default NavBar