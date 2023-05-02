import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Home from './Components/Home';
import Product from './Components/Product';
import ProductDetail from './Components/ProductDetail';
import User from './Components/User';
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path='/productdetail' element={<ProductDetail/>}></Route>
      <Route path="/User" element={<User/>}></Route>
      <Route path="/User/:id" element={<UserDetails/>}></Route>
      <Route path='*' element={<h1>404<><br/><h1>PAGE NOT FOUND</h1></></h1>}></Route>
    </Routes>
    </>
  );
}

export default App;
