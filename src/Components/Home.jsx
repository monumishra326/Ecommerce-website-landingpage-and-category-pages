import React from 'react'
import Footer from './Footer'
import './Home.css'
import { Productcard } from './Productcard'



export const Home = () => {
  return (
    <div>
       <div className='banner'>
           <h1>Ecommerce</h1>
           <h1> Welcome Ecommerce Website</h1>
           <h2>FIND AMAZING PRODUCTS BELOW</h2>
           
       </div>
       <h1>Featured Products</h1>
      <Productcard/>
      <Footer/>
      
    </div>
  )
}
