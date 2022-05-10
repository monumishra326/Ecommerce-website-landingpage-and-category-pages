

import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './Components/Cart';
import { Home } from './Components/Home';
import NavBar from './Components/Nav';
import Product from './Components/Product';

import { Signin } from './Components/Signin';
import { Signup } from './Components/Signup';




function App() {
  return (
    <div>
      <NavBar/>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>

        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
        <Route path='/signin' element={<Signin/>}/>

      </Routes>
   
    </div>
  );
}

export default App;
