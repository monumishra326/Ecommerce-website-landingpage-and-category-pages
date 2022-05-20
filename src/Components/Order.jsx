import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Order.css'
export const Order = () => {
  const navigate=useNavigate();
  const paymenthandle=()=>{
    navigate("/payment")
}
    const order=useSelector((state)=>state.order.order);
    console.log(order);
  return (
    <div>
         {order.data.map((item)=>{
        return<div className='cartdata'>
         
         <img src={item.image}/>
         <p>{item.title}</p>
         <p>Category:{item.category}</p>
         
         <p>{order.count}</p>
         <p>₹{item.price}</p>
         
         </div>
      })}
     <>
     <button onClick={paymenthandle} className="paymentbtn"><p>Pay:{order.price}</p></button>
     </>
    </div>
  )
}
