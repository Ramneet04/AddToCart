import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';
const Cart = () => {
  const {cart} = useSelector((state) => {return state});
  const [totalAmount, setTotalAmount] = useState(0);
  
  useEffect(()=> {
    setTotalAmount(cart.reduce((acc,curr) => {return acc+curr.price}),0);
  })
  return (
    <div>
      {
        cart.length > 0 ? (
          <div>

            <div>{
          cart.map((product,index)=> {
            return <CartItem key={index} product={product} itemIndex={index}/>
          })
           }</div>

           <div>
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p>Total Amount: {totalAmount}</p>
            </div>
            <div>
              <button>Checkout Now</button>
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