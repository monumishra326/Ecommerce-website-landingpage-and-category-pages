import React from 'react'

import { Order } from './Order'
import './Checkout.css'
import Footer from './Footer'

export const Checkout = () => {
    
  return (
    <div className='Checkoutcontainer'>
    <div className='shipcontainer'>
        <form action="">
            <h1>
                
                Shipping Details
            </h1>
                   
                    <input type="text" placeholder='First Name' className='inp'/><br></br>
                   
                    <input type="text" placeholder='Last Name' className='inp'/><br></br>
                <input type="text" placeholder='Street OR Address' className='inp'/><br></br>
                    <input type="text" placeholder='City'className='inp'/><br></br>
                    <input type="text" placeholder='State'className='inp'/><br></br>
                    <input type="text" placeholder='Zip/Pincode'className='inp'/><br></br>
            
        </form>
    </div>

     <div className='ordercontainer'>
     <h1>Order Detail</h1>
     <Order/>
     </div>
     <Footer/>
    </div>
  )
}
