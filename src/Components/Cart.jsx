import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletecartsucess } from '../Redux/Cart/action';
import './Cart.css'
import { Link, useNavigate } from 'react-router-dom';
import { addorder } from '../Redux/Order/action';

export const Cart = () => {
  const data=useSelector((state)=>state.carts.carts);


  const [price,setPrice]=useState(0);

  const[count,setCount] = useState(1);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
    let cart11=JSON.parse(localStorage.getItem("ekart"))||[];
    // console.log(cart11);
    dispatch(deletecartsucess(cart11));
  },[])

  const handelcount = (value,itemprice)=>{
    let priceval=count+value;
   setCount(count+value);

   setPrice(priceval*itemprice);
   
  //  console.log(count);
  }
  // console.log(data);
  
  

  console.log(data.price);

  const handlecheckout=()=>{
    let payload={data,count,price};
    
    dispatch(addorder(payload));
    navigate("/checkout")
  }
 
  const handledelete=(item)=>{
  let x = data.filter((el)=>{
    if(el.id !=item.id){
      return el;
    }
  })
  localStorage.setItem("ekart",JSON.stringify(x));
  dispatch(deletecartsucess(x))
  let pricek=price-(count*item.price);
  setPrice(pricek);
 


  
   
  }
  
  useEffect(()=>{
    var sum=0;

    data.map((e)=>{
     sum+=e.price
     setPrice(sum)
    })
  },[])
  console.log(price)
  return (
    <div><h1>CartPage</h1>
    
      {data.map((item)=>{
        return<div className='cartdata'>
         
         <img src={item.image}/>
         <p>{item.title}</p>
         <p>Category:{item.category}</p>
         <button onClick={()=>{handelcount(1,item.price)}} className="cart111"> + </button>
         <p>{count}</p>
       <button onClick={()=>{handelcount(-1,item.price)}}className="cart111">-</button>
         <p>₹{item.price}</p>
         <button onClick={()=>{handledelete(item)}}className="cart112">Delete</button>
         </div>
      })}
  
      <div className='checkout'>
      
       
      <h2>SubTotal:{price}</h2>
      <button className='checkoutbtn' onClick={handlecheckout}>CheckOut</button>
      
      </div>
     
    </div>

    

  )
}
