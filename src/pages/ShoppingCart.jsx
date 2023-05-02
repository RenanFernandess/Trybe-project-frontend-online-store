import React, { Component } from 'react';
import { ProductCardInCart } from '../components';
import { CartContext } from '../context';

export default class ShoppingCart extends Component {
  render() {
    const { cartProducts } = this.context;
    return (
      <div>
        { cartProducts.length
          ? (
            cartProducts.map(({ title, id, price, thumbnail, quantityInCart }, index) => (
              <ProductCardInCart
                key={ id }
                title={ title }
                price={ price }
                image={ thumbnail }
                quantity={ quantityInCart }
                id={ id }
                index={ index }
              />
            )))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </div>
    );
  }
}

ShoppingCart.contextType = CartContext;
