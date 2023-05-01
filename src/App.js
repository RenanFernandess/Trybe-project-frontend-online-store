import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/Product';
import { ProductProvider } from './context';
import Header from './components';

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={ Search } />
            <Route exact path="/ShoppingCart" component={ ShoppingCart } />
            <Route exact path="/Product/:id" component={ Product } />
          </Switch>
        </div>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
