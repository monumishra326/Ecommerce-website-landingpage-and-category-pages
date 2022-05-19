import * as React from 'react';
import{useEffect,useState} from "react";
import './Product.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchproduct } from '../Redux/Product/action';
import { addcartsuceess } from '../Redux/Cart/action';






export default function Product() {
   const [ndata, setNdata]=  useState([]);
   const [xdata,setXdata]= useState([]);
   const dispatch=useDispatch()
   const data=useSelector((state)=>state.products.products);
   useEffect(()=>{
    // getData()   
    dispatch(fetchproduct())
    console.log(data);
    // setNdata(data);


    
  }
  ,[]);

  useEffect(()=>{
    setNdata(data)
    setXdata(data)
    
  }
  ,[data]);
  

    const customfilter=(x)=>{
      var filterdata=ndata.filter((e)=>{
        return e.category== x
       



       
      })
      console.log(filterdata,x);
      setXdata(filterdata)
      
    }
   
    const handletocart=(item)=>{
      let cart11=JSON.parse(localStorage.getItem("ekart"))||[];
      cart11=[...cart11,item];
      // console.log(cart11);
      localStorage.setItem("ekart",JSON.stringify(cart11));
      dispatch(addcartsuceess(item))

    }


    

     

   
  
  return (
    // <ImageList sx={{ width: 1, height: 1 }} cols={3} rowHeight={450}>
    //   {data.map((item) => (
    //     <ImageListItem key={item.src}>
    //       <img
    //         src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
    //         srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
    //         alt={item.title}
    //         loading="lazy"
    //       />
    //       <p>{item.price}</p>
    //       <p>{item.name}</p>
    //       <p>{item.desc}</p>
    //     </ImageListItem>
    //   ))}
    // // </ImageList>
    <div className='main'>
      <div className='category'>
        <h1 className='txt'>Category List</h1>
      <button className='fillbtn' onClick={()=>{customfilter("men's clothing")}}>men's clothing</button>
      <button className='fillbtn' onClick={()=>{customfilter("jewelery")}}>jewelery</button>
      <button className='fillbtn'onClick={()=>{customfilter("electronics")}}>electronics</button>
      <button className='fillbtn'onClick={()=>{customfilter("women's clothing")}}>women's clothing</button>
      </div>


    
     <div className="productitem">
      {xdata.map((item)=>{
        return(
          <div className='itemscate'>
          <img src={item.image}/>
          <p>Title:{item.title}</p>
          {/* <p>Des:{item.description}</p>  */}
          <p>Category:{item.category}</p>
          <p>₹{item.price}</p>
          
          <button onClick={()=>{handletocart(item)}} className="addbtn">Add To cart</button>
          </div>
          
        )
        
      })}
     
      </div>
      
    </div>


  )
}
