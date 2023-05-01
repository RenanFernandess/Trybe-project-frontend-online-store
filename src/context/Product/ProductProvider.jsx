import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductContext from './ProductContext';

export default class ProductProvider extends Component {
  state = {
    products: [],
    category: '',
  }

  setProducts = (products) => {
    this.setState({ products });
  }

  setCategoryAndProducts = (category, products) => {
    this.setState({ category, products });
  }

  render() {
    const { children } = this.props;

    const contextType = {
      ...this.state,
      setProducts: this.setProducts,
      setCategoryAndProducts: this.setCategoryAndProducts,
    };

    return (
      <ProductContext.Provider value={ contextType }>
        { children }
      </ProductContext.Provider>
    );
  }
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
