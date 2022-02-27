import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import './index.scss';
import Header from 'home/Header';
import Footer from 'home/Footer';
import SafeComponent from './SafeComponent';
import PDPContent from './PDPContent';

const App = () => (
  <BrowserRouter>
    <div className='mt-10 text-3xl mx-auto max-w-6xl'>
      <SafeComponent>
        <Header />
        <Routes>
          <Route path='/products' element={<PDPContent />}>
            <Route path=':id' element={<PDPContent />} />
          </Route>
        </Routes>
        <Footer />
      </SafeComponent>
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById('app'));
