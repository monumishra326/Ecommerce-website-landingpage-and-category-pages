import React from 'react'
import { useSelector } from 'react-redux'

export const Order = () => {
    const order=useSelector((state)=>state.order.order);
    console.log(order);
  return (
    <div>Order
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
     <bold>Sub Total:{order.price}</bold>
     </>
    </div>
  )
}
