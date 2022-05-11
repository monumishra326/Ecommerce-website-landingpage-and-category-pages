import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletecartsucess } from '../Redux/Cart/action';

export const Cart = () => {
  const data=useSelector((state)=>state.carts.carts);

  const [price,setPrice]=useState(0);
  const[count,setCount] = useState(1);

  const handelcount = (value)=>{
   setCount(count+value);
   setPrice(count*price);
   
  //  console.log(count);
  }
  // console.log(data);
  
  

  console.log(data.price);
  const dispatch=useDispatch()
  const handledelete=(item)=>{
  let x = data.filter((el)=>{
    if(el.id !=item.id){
      return el;
    }
  })
  dispatch(deletecartsucess(x))
  
 


  
   
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
    <div>Cart
      {data.map((item)=>{
        return<>
         <p>{item.title}</p>
         <img src={item.image}/>
         <p>Category:{item.category}</p>
         <p>₹{item.price}</p>
         <button onClick={()=>{handledelete(item)}}>delete</button>
         </>
      })}

      <>
       <button onClick={()=>{handelcount(1)}}> + </button>
       <p>{count}</p>
       <button onClick={()=>{handelcount(-1)}}>-</button>
      <h2>SubTotal:{price}</h2>
      </>
    </div>

    

  )
}
