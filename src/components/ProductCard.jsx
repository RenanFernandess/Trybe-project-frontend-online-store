import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Products.css';
import AddToCartButton from './AddToCartButton';

class ProductCard extends Component {
  render() {
    const { product: { title, thumbnail, price, id }, product } = this.props;
    return (
      <div className="product-card" data-testid="product">
        <Link className="link" to={ `/Product/${id}` } data-testid="product-detail-link">
          <img
            className="product-image"
            src={ thumbnail.replace(/(I\.jpg){1}$/g, 'W.jpg') }
            alt={ title }
          />
          <strong className="product-title">{ title }</strong>
          <p className="product-price">
            R$
            {' '}
            { price }
          </p>
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
    title: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    id: propTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
