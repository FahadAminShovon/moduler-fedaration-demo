import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './index.scss';
import Header from 'home/Header';
import Footer from 'home/Footer';
import SafeComponent from './SafeComponent';
import PDPContent from 'pdp/PDPContent';
import HomeContent from 'home/HomeContent';
import CartContent from 'cart/CartContent';

const MainLayout = () => (
  <BrowserRouter>
    <div className='mt-10 text-3xl mx-auto max-w-6xl'>
      <SafeComponent>
        <Header />
        <Routes>
          <Route path='/' element={<HomeContent />} />
          <Route path='/cart' element={<CartContent />} />
          <Route path='/products' element={<PDPContent />}>
            <Route path=':id' element={<PDPContent />} />
          </Route>
        </Routes>
        <Footer />
      </SafeComponent>
    </div>
  </BrowserRouter>
);

export default MainLayout;
