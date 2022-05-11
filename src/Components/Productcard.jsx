import React from 'react'
import{useEffect,useState} from "react";
import './Productcard.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchproduct } from '../Redux/Product/action';

export const Productcard = () => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.products.products);
  useEffect(()=>{
   // getData()   
   dispatch(fetchproduct())
   console.log(data);
   // setNdata(data);
   
 }
 ,[]);
  return (
      <div className='box1'>
    {data.map((item)=>{
        return(
          <div className='productCard1'>
          <img src={item.image}/>
          <p>Title:{item.title}</p>
          {/* <p>Des:{item.description}</p>  */}
          <p>Category:{item.category}</p>
          <p>₹{item.price}</p>
          </div>
          
        )
        
      })}
      </div>
  )
}
