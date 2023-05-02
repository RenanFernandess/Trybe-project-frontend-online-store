import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../context';

const REDUCER = -1;
export default class ProductCardInCart extends Component {
  render() {
    const { image, title, price, quantity, index, id } = this.props;
    const { changeQuantity, removeProduct } = this.context;
    return (
      <div>
        <img src={ image } alt={ title } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <p>{ price }</p>
        <div>
          <button
            onClick={ () => { changeQuantity(1, index); } }
            type="button"
            data-testid="product-increase-quantity"
          >
            +
          </button>
          <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
          <button
            onClick={ () => { changeQuantity(REDUCER, index); } }
            type="button"
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <button
            onClick={ () => { removeProduct(id); } }
            type="button"
            data-testid="remove-product"
          >
            Remover
          </button>
        </div>
      </div>
    );
  }
}

ProductCardInCart.contextType = CartContext;

ProductCardInCart.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
