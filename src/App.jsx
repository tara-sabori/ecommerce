import React, { useState } from 'react';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import NavBar from './component/navbar/NavBar';
import Cart from './pages/cart/Cart'
import './App.css'
import AppContext from './context/AppContext';
import ProductPage from './pages/productPage/ProductPage';
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <AppContext>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productitem/:id' element={<ProductPage/>} />
      </Routes>
      <Footer/>
    </AppContext>
  );
}

export default App;
