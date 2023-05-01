import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../context';

export default class AddToCartButton extends Component {
  addInCart = () => {
    const { product } = this.props;
    const { addProductInCart } = this.context;
    addProductInCart(product);
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

AddToCartButton.contextType = CartContext;

AddToCartButton.defaultProps = {
  className: undefined,
  testid: 'product-add-to-cart',
};

AddToCartButton.propTypes = {
  product: PropTypes.shape().isRequired,
  className: PropTypes.string,
  testid: PropTypes.string,
};
