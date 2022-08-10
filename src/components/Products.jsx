import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Products.css';

class Products extends Component {
  render() {
    const { name, image, price, id } = this.props;
    return (
      <Link className="link" to={ `/Product/${id}` } data-testid="product-detail-link">
        <div className="product-cart" data-testid="product">
          <img className="product-image" src={ image } alt={ name } />
          <h2 className="product-title">{ name }</h2>
          <p className="product-price">{ price }</p>
        </div>
      </Link>
    );
  }
}

Products.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  id: propTypes.string.isRequired,
};

export default Products;
