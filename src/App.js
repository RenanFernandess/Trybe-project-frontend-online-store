import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider, CartProvider } from './context';
import Header from './components';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <div className="App">
            <Header />
            <Routes />
          </div>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
