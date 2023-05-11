import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Search, { ShoppingCart, Product, Checkout } from './pages';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route exact path="/ShoppingCart" component={ ShoppingCart } />
        <Route exact path="/Product/:id" component={ Product } />
        <Route exact path="/Checkout" component={ Checkout } />
      </Switch>
    );
  }
}
