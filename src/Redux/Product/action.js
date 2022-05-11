import axios from "axios"

export const ADD_PRODUCT_SUCCESS="ADD_PRODUCT_SUCCESS"


export const addproduct=(payload)=>{
    return {type:ADD_PRODUCT_SUCCESS,payload}

}



export const fetchproduct=()=>(dispatch)=>{

   
    axios.get("https://fakestoreapi.com/products").then((res)=>{
        // console.log(res.data);
        dispatch(addproduct(res.data))

    
        
        
    }
    )


}

