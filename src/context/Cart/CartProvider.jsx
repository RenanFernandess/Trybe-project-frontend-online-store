import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';
import getItemFromLocalStorage, { saveItemToLocalStorage } from '../../services';

export default class CartProvider extends Component {
  state = {
    cartProducts: [],
  };

  CART_KEY = 'cart'

  componentDidMount() {
    this.setState(getItemFromLocalStorage(this.CART_KEY) || {});
  }

  componentDidUpdate() {
    this.saveCartToStorage();
  }

  addProductInCart = (product) => {
    this.setState(({ cartProducts }) => {
      let productIndex;
      const checkIfItContains = cartProducts.some(({ id }, index) => {
        productIndex = index;
        return id === product.id;
      });
      if (checkIfItContains) {
        const products = [...cartProducts];
        products[productIndex] = {
          ...products[productIndex],
          quantityInCart: products[productIndex].quantityInCart + 1,
        };
        return { cartProducts: products };
      }
      product.quantityInCart = 1;
      return { cartProducts: [...cartProducts, product] };
    });
  }

  changeQuantity = (value, index) => {
    this.setState(({ cartProducts }) => {
      const products = [...cartProducts];
      const quantityInCart = products[index].quantityInCart + value || 1;
      products[index] = {
        ...products[index],
        quantityInCart,
      };
      return { cartProducts: products };
    });
  }

  removeProduct = (productId) => {
    const { cartProducts } = this.state;
    const products = cartProducts.filter(({ id }) => productId !== id);
    this.setState({ cartProducts: products });
  }

  saveCartToStorage = () => {
    saveItemToLocalStorage(this.CART_KEY, this.state);
  }

  render() {
    const { children } = this.props;

    const contextType = {
      ...this.state,
      addProductInCart: this.addProductInCart,
      changeQuantity: this.changeQuantity,
      removeProduct: this.removeProduct,
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
