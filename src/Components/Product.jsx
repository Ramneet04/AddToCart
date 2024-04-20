import React from 'react'

const Product = ({post}) => {
  return (
      <div className='h-[400px] w-[200px] shadow-lg shadow-sky-900 flex flex-col'>
        <div>
        <p className=' text-[10px]'>{post.title}</p>
        <div className='text-sm'>{post.description}</div>
        </div>
        <div>
          <img src={post.image} alt="productImage" width={150}/>
        </div>
        <div>
        <p>{post.price}</p>
        <button>
          Add to cart
        </button>
        </div>
      </div>
  )
}

export default Product