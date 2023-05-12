import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';
import getItemFromLocalStorage, { saveItemToLocalStorage } from '../../services';

const INITIAL_STATE = {
  cartProducts: [],
  totalAmount: 0,
  totalPrice: 0,
};
export default class CartProvider extends Component {
  state = INITIAL_STATE;

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
        return { cartProducts: products, ...this.calcTotalAmountAndPrice(products) };
      }
      product.quantityInCart = 1;
      const products = [...cartProducts, product];
      return { cartProducts: products, ...this.calcTotalAmountAndPrice(products) };
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
      return { cartProducts: products, ...this.calcTotalAmountAndPrice(products) };
    });
  }

  removeProduct = (productId) => {
    const { cartProducts } = this.state;
    const products = cartProducts.filter(({ id }) => productId !== id);
    this.setState({ cartProducts: products, ...this.calcTotalAmountAndPrice(products) });
  }

  calcTotalAmountAndPrice = (products) => products
    .reduce((acc, curr) => {
      acc.totalAmount += curr.quantityInCart;
      acc.totalPrice += curr.price;
      return acc;
    }, {
      totalAmount: 0,
      totalPrice: 0,
    })

  saveCartToStorage = () => {
    saveItemToLocalStorage(this.CART_KEY, this.state);
  }

  clearCart = () => {
    this.setState(INITIAL_STATE, () => {
      localStorage.removeItem(this.CART_KEY);
    });
  }

  render() {
    const { children } = this.props;

    const contextType = {
      ...this.state,
      addProductInCart: this.addProductInCart,
      changeQuantity: this.changeQuantity,
      removeProduct: this.removeProduct,
      clearCart: this.clearCart,
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
