import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Order } from './Order'
import './Checkout.css'

export const Checkout = () => {
    const navigate=useNavigate();
    const handlesucess=()=>{
        alert("Sucess Payment")
    }
    const carthandle=()=>{
        navigate("/cart")
    }


  return (
    <div className='Checkoutcontainer'>
    <div className='shipcontainer'>
        <form action="">
            <h1>
                
                Shipping Details
            </h1>
                    <label for="f-name">First</label>
                    <input type="text" name="f-name"/>
                    <label for="l-name">Last</label>
                    <input type="text" name="l-name"/>
                <label for="name">Street</label>
                <input type="text" name="address"/>

                    <label for="city">City</label>
                    <input type="text" name="city"/>
                    <label for="state">State</label>
                    <input type="text" name="state"/>
                    <label for="zip">Zip</label>
                    <input type="text" name="zip"/>
            <h1>
                Payment Information
            </h1>
            
                <label for="card-num">Credit Card No./DebitCard</label>
                <input type="text" />

                    <label for="card-num">Exp</label>
                    <input type="text" />
                    <label for="card-num">CCV</label>
                    <input type="text" />
            <div class="btns">
                <button onClick={handlesucess}>Purchase</button>
                <button onClick={carthandle}>Back to cart</button>
            </div>
        </form>
    </div>

     <div className='ordercontainer'>
     <h1>Order Detail</h1>
     <Order/>
     </div>
    </div>
  )
}
