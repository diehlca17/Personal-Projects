import React from 'react';
import { Navbar, Welcome, Footer, Services, Transactions } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TransactionContext } from './context/TransactionContext';

const App = () => {
  return (
    
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
          <Navbar/>
      
          <Welcome/>
      
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
  );
}

export default App;