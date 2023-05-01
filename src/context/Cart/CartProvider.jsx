import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';
import getItemFromLocalStorage, { saveItemToLocalStorage } from '../../services';

const CART = 'cart';
const NOT_CONTAIN = -1;

export default class CartProvider extends Component {
  state = {
    cartProducts: [],
  };

  componentDidMount() {
    this.setState(getItemFromLocalStorage(CART) || {});
  }

  addProductInCart = (product) => {
    this.setState(({ cartProducts }) => {
      const productIndex = cartProducts.indexOf(product);
      if (productIndex === NOT_CONTAIN) {
        return { cartProducts: [...cartProducts, product] };
      }
      if (cartProducts[productIndex].quantityInCart) {
        cartProducts[productIndex].quantityInCart += 1;
      }
      cartProducts[productIndex].quantityInCart = 1;
      return { cartProducts };
    }, this.saveCartToStorage);
  }

  changeQuantity = (value, index) => {
    this.setState(({ cartProducts }) => {
      cartProducts[index].quantityInCart += value;
      return { cartProducts };
    }, this.saveCartToStorage);
  }

  saveCartToStorage = () => {
    saveItemToLocalStorage(CART, this.state);
  }

  render() {
    const { children } = this.props;

    const contextType = {
      ...this.state,
      addProductInCart: this.addProductInCart,
      changeQuantity: this.changeQuantity,
    };

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
