import { ADD_ORDER_SUCCESS } from "./action";


const init = {
  order:{}

};

export const OrderReducer = (state = init, { type, payload }) => {
   
  switch (type) {
    case ADD_ORDER_SUCCESS:
        
      return { ...state,order:{...payload}};


      

    default:
      return state;
  }
};
