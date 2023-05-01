import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';
import getItemFromLocalStorage, { saveItemToLocalStorage } from '../../services';

const CART = 'cart';

export default class CartProvider extends Component {
  state = getItemFromLocalStorage(CART) || {
    cartProducts: [],
  }

  addProductInCart = (product) => {
    this.setState(
      ({ cartProducts }) => {
        const productIndex = cartProducts.indexOf(product);
        if (!productIndex) return { cartProducts: [...cartProducts, product] };
        if (cartProducts[productIndex].quantityInCart) {
          cartProducts[productIndex].quantityInCart += 1;
        }
        cartProducts[productIndex].quantityInCart = 1;
        return { cartProducts };
      },
      this.saveCartToStorage,
    );
  }

  saveCartToStorage = () => {
    saveItemToLocalStorage(CART, this.state);
  }

  render() {
    const { children } = this.props;

    const contextType = { ...this.state, addProductInCart: this.addProductInCart };

    return (
      <CartContext.Provider value={ contextType }>
        { children }
      </CartContext.Provider>
    );
  }
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
