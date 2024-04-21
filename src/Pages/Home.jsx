import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    async function getProducts(){
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    useEffect(() => {
      getProducts();
    },[]); 
  return (
    <div className='w-[1080px] flex flex-wrap mx-auto gap-4 justify-between px-4 '>
      {
        loading ? <Spinner/> : (
          posts.map((post, index)=> {
            return <Product key={index} post={post}/>
          })
        ) 
      }
    </div>
  )
}

export default Home