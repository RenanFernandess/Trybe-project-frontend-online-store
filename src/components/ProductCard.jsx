import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Products.css';
import AddToCartButton from './AddToCartButton';
import FreeShipping from './FreeShipping';

class ProductCard extends Component {
  render() {
    const { product: { title, thumbnail, price, id, shipping: { free_shipping: free,
    } }, product } = this.props;
    return (
      <div className="product">
        <Link className="link" to={ `/Product/${id}` } data-testid="product-detail-link">
          <div className="product-card" data-testid="product">
            { free && <FreeShipping /> }
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
    title: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    id: propTypes.string.isRequired,
    shipping: propTypes.shape({
      free_shipping: propTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductCard;
