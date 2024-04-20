import React from 'react'
import logo from "../assets/lo.jpg"
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='w-[100%] border-b-2 border-sky-900'>
    <div className='flex justify-between items-center w-[1080px] h-[80px] mx-auto'>
      <NavLink to="/">
        <div className='w-[100px]'>
            <img src={logo} alt="logo" className='bg-transparent' />
        </div>
        </NavLink>
        <div className='flex gap-7 items-center'>
          <NavLink to="/">
          <p>Home</p>
          </NavLink>
            <NavLink to="/cart">
            <MdShoppingCart />
            </NavLink>
        </div>
    </div>
    </div>
  )
}

export default NavBar