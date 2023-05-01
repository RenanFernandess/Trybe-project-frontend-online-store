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

  setCategory = (category) => {
    this.setState({ category });
  }

  render() {
    const { children } = this.props;

    const contextType = {
      ...this.state,
      setProducts: this.setProducts,
      setCategory: this.setCategory,
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
