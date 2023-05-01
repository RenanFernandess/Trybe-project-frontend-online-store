import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/Product';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route exact path="/ShoppingCart" component={ ShoppingCart } />
        <Route exact path="/Product/:id" component={ Product } />
      </Switch>
    );
  }
}
