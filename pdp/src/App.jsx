import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Header from 'home/Header';
import Footer from 'home/Footer';
import SafeComponent from './SafeComponent';

const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <SafeComponent>
      <Header />
      Home page content
      <Footer />
    </SafeComponent>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));