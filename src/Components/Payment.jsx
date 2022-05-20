import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
import './Payment.css'

export const Payment = () => {
  const navigate=useNavigate();
    const handlesucess=()=>{
        alert("Sucess Payment")
    }
    const carthandle=()=>{
        navigate("/cart")
    }
  return (
    <>
    <div className='information'>
    <h1>
                Payment Information
            </h1>
            
                <label for="card-num">Credit Card No./DebitCard</label>
                <input type="text" className='inp2'/>

                    <label for="card-num">Exp</label>
                    <input type="text" className='inp2'/>
                    <label for="card-num">CCV</label>
                    <input type="text" className='inp2' />
            <div class="btns">
                <button onClick={handlesucess} className="btn2">Purchase</button>
                <button onClick={carthandle} className="btn2">Back to cart</button>
            </div>
           
  
    </div>
    <Footer/>
    </>
  )
}
