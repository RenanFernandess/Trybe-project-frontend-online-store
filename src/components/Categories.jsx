import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductContext from '../context';

export default class Categories extends Component {
  state = {
    categories: [],
  }

  componentDidMount = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  searchByCategory = async ({ target: { value } }) => {
    const { setCategoryAndProducts } = this.context;
    const data = await getProductsFromCategoryAndQuery(value);
    setCategoryAndProducts(value, data.results);
  }

  render() {
    const { categories } = this.state;
    return (
      <form className="categories">
        <h2>categorias</h2>
        { categories.map((category) => (
          <label
            className="radio"
            key={ category.id }
            htmlFor={ category.id }
            data-testid="category"
          >
            <input
              type="radio"
              id={ category.id }
              name="category"
              value={ category.id }
              onChange={ this.searchByCategory }
            />
            { category.name }
          </label>
        )) }
      </form>
    );
  }
}

Categories.contextType = ProductContext;

Categories.propTypes = {
  inputChange: PropTypes.func,
}.isRequired;
