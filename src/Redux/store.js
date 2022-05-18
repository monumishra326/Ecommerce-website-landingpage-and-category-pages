import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./Cart/reducer";
import { OrderReducer } from "./Order/reducer";
import { ProductReducer } from "./Product/reducer";


// const composeEnhancers =
//   typeof window === 'object' &&
//   window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?   
//     window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

//     const middleware=[thunk]
// const enhancer = composeEnhancers(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// );
const rootrudcer=combineReducers({
  products:ProductReducer,carts:CartReducer,order:OrderReducer
})

export const store=createStore(rootrudcer,compose(applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))