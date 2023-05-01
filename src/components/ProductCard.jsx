import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Products.css';
import AddToCartButton from './AddToCartButton';

class ProductCard extends Component {
  render() {
    const { product: { name, thumbnail, price, id }, product } = this.props;
    return (
      <div className="product">
        <Link className="link" to={ `/Product/${id}` } data-testid="product-detail-link">
          <div className="product-card" data-testid="product">
            <img
              className="product-image"
              src={ thumbnail.replace(/(I\.jpg){1}$/g, 'W.jpg') }
              alt={ name }
            />
            <strong className="product-title">{ name }</strong>
            <p className="product-price">
              R$
              {' '}
              { price }
            </p>
          </div>
        </Link>
        <AddToCartButton
          className="button primary-button"
          product={ product }
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: propTypes.shape({
    name: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    id: propTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
