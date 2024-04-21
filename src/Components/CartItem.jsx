import React from 'react'
import { IoTrashBin } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
import { toast } from 'react-hot-toast';
const CartItem = ({product}) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Item Removed from Cart");
  }
  return (
    <div className='w-[100%] flex gap-8 justify-between h-[210px] border-b-2 border-sky-600 py-5'> 
      <div className='h-[160px] w-[45%]'>
        <img src={product.image} alt="" className='h-full w-full'/>
      </div>

      <div className='flex flex-col gap-4'>
        <div className=' text-lg text-gray-700 font-semibold text-left'>{product.title}</div>
        <p className=' font-normal text-[13px] text-left text-gray-300'>{product.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        
        <div className='flex justify-between items-center w-[85%]'>
          <div className='text-green-600'>${product.price}</div>
          <div onClick={removeFromCart} className='bg-red-500 rounded-full w-6 h-6 flex items-center justify-center'>
          <IoTrashBin/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem