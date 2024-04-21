import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/cartSlice';
import { toast } from 'react-hot-toast';
const Product = ({post}) => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

 const addToCart=() => {
  dispatch(add(post));
  toast.success("item added to cart");
}
const removeFromcart= () => {
  dispatch(remove(post.id));
  toast.error("item removed from cart");
}
  return (
      <div className='h-[380px] w-[240px] shadow-lg shadow-sky-900 flex items-center justify-center pt-4 pb-2 px-1 mx-auto mt-10 rounded-2xl'>
        <div className='h-[360px] w-[200px] mx-auto flex flex-col gap-6'>
        <div className='min-h-[40px]'>
        <p className=' text-lg text-gray-700 font-semibold text-center'>{post.title.substring(0,20)}</p>
        <div className='text-grap-400 font-normal text-[13px] w-40 text-center mx-auto pt-3 text-gray-300'>{post.description.substring(0,80)}</div>
        </div>
        <div className='h-[160px] flex items-center justify-center'>
          <img src={post.image} alt="productImage" className='h-full w-full rounded-3xl'/>
        </div>
        <div className='flex justify-between items-center pb-4'>
        <p className='text-green-600'>${post.price}</p>
        <button>
          {
            cart.find((p) => {return p.id === post.id}) ? (
              <button onClick={removeFromcart} className='border border-red-600 rounded-full py-1 px-2'>Remove Item</button>
            ) : (
              <button onClick={addToCart} className='border border-sky-600 rounded-full py-1 px-2'>Add to Cart</button>
            )
          }
        </button>
        </div>
        </div>
      </div>
  )
}

export default Product