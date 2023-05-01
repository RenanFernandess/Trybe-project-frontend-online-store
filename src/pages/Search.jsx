import React, { Component } from 'react';
import Categories from '../components/Categories';
import { ProductCard } from '../components';
import './Search.css';
import ProductContext from '../context';

class Search extends Component {
  render() {
    const { products } = this.context;
    return (
      <main>
        <Categories />
        <section className="products-container">
          { products.length !== 0
            ? (
              products.map((product) => {
                const { id } = product;
                return (
                  <ProductCard
                    key={ id }
                    product={ product }
                  />
                );
              }))
            : (
              <p
                className="search-mensage"
                data-testid="home-initial-message"
              >
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            ) }
        </section>
      </main>
    );
  }
}

Search.contextType = ProductContext;

export default Search;
