
import { ADD_CART_SUCCESS, DELETE_CART_SUCCESS } from "./action";

const init = {
  carts:[]

};

export const CartReducer = (state = init, { type, payload }) => {
    // console.log(state,type,payload);
  switch (type) {
    case ADD_CART_SUCCESS:
        // console.log(payload)
      return { ...state,carts:[...state.carts,payload]};


      case DELETE_CART_SUCCESS:
        // console.log(payload)
      return { ...state,carts:[...payload]};

    default:
      return state;
  }
};
