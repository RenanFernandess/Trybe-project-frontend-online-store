import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../context';
import { getProductsFromCategoryAndQuery } from '../services';

class Header extends Component {
  state = {
    search: '',
  }

  buttonSearch = async () => {
    const { setProducts, category } = this.context;
    const { search } = this.state;
    const data = await getProductsFromCategoryAndQuery(category, search);
    setProducts(data.results);
  }

  render() {
    const { search } = this.state;
    return (
      <header className="main-header">
        <h1 className="title">MercaDão</h1>
        <div className="serch-form-cont">
          <div className="serch-form">
            <input
              className="search-input"
              name="search"
              data-testid="query-input"
              type="text"
              value={ search }
              onInput={ ({ target: { value } }) => { this.setState({ search: value }); } }
            />
            <button
              className="search-button"
              type="button"
              data-testid="query-button"
              onClick={ this.buttonSearch }
            >
              Pesquisar
            </button>
          </div>
        </div>
        <nav>
          <Link
            className="button primary-button"
            data-testid="shopping-cart-button"
            to="/ShoppingCart"
          >
            Carrinho de compra
          </Link>
        </nav>
      </header>
    );
  }
}

Header.contextType = ProductContext;

export default Header;
