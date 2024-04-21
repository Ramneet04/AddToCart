import React from 'react'
import logo from "../assets/lo.jpg"
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavBar = () => {
  const {cart} = useSelector((state) => state);
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
            <div className='relative'>
            <NavLink to="/cart">
            <MdShoppingCart className='w-8 h-5'/>
            <span className={`${cart.length >0 ? "absolute -right-2 -top-3 bg-green-600 rounded-full w-5 h-5 flex items-center justify-center" : ""}`}>{cart.length >0 ?cart.length : ""}</span>
            </NavLink>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NavBar