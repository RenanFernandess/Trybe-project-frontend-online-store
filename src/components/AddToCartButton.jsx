import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getItemFromLocalStorage, { saveItemToLocalStorage } from '../services';

const CART = 'cart';

export default class AddToCartButton extends Component {
  addInCart = () => {
    const { product } = this.props;
    const cart = getItemFromLocalStorage(CART) || [];
    saveItemToLocalStorage(CART, [...cart, product]);
  }

  render() {
    const { className, testid } = this.props;

    return (
      <button
        className={ className }
        type="button"
        data-testid={ testid }
        onClick={ this.addInCart }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddToCartButton.defaultProps = {
  className: undefined,
  testid: 'product-add-to-cart',
};

AddToCartButton.propTypes = {
  product: PropTypes.shape().isRequired,
  className: PropTypes.string,
  testid: PropTypes.string,
};
