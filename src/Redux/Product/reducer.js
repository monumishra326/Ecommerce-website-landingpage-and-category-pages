
import {  ADD_PRODUCT_SUCCESS } from "./action";

const init = {
  products:[]

};

export const ProductReducer = (state = init, { type, payload }) => {
    // console.log(state,type,payload);
  switch (type) {
    case ADD_PRODUCT_SUCCESS:
        // console.log(payload)
      return { ...state,products: payload};

    default:
      return state;
  }
};
