import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';
const Cart = () => {
  const {cart} = useSelector((state) => {return state});
  const [totalAmount, setTotalAmount] = useState(0);
  
  useEffect(()=> {
    setTotalAmount(cart.reduce((acc,curr) => {return acc+curr.price},0));
  })
  return (
    <div className='flex w-[1080px] mx-auto mt-2 p-6'>
      {
        cart.length > 0 ? (
          <div className='flex w-[1080px] justify-between'>

            <div className='w-[50%]'>{
          cart.map((product,index)=> {
            return <CartItem key={index} product={product} itemIndex={index}/>
          })
           }</div>

           <div className='h-full flex flex-col justify-between pb-10'>
            <div className='flex flex-col gap-3'>
              <div className='text-lg text-green-600 font-semibold font-mono'>Your Cart</div>
              <div className='text-4xl text-green-500 font-bold'>Summary</div>
              <p>
                <span className='text-green-200'>Total Items: {cart.length}</span>
              </p>
            </div>
            <div className='flex flex-col gap-4'>
            <div >
              <p>Total Amount: ${totalAmount}</p>
            </div>
            <div>
              <button className='bg-green-700 font-semibold text-lg py-2 px-12 rounded-xl'>Checkout Now</button>
            </div>
            </div>
           </div>

          </div>
        ) : (
          <div>
            <div>Cart is empty</div>
            <Link to="/">
            <button>Go to Products</button>
            </Link>
          </div>
        ) 
      }
    </div>
  )
}

export default Cart