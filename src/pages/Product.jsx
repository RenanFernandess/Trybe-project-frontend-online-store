import React, { Component } from 'react';
import propTypes from 'prop-types';
import { getProduct } from '../services';
import { AddToCartButton, FreeShipping, Assessments } from '../components';

export default class Product extends Component {
  state = {
    product: {},
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProduct(id);
    this.setState({ product });
  }

  render() {
    const {
      product: { title, price, thumbnail, attributes, shipping, id },
      product } = this.state;
    return (
      <div>
        <div>
          <h2 data-testid="product-detail-name">{title}</h2>
          <h3 data-testid="product-detail-price">{price}</h3>
          <img src={ thumbnail } data-testid="product-detail-image" alt={ title } />
          { shipping?.free_shipping && <FreeShipping /> }
          <section>
            <ul>
              { attributes && attributes.map((atributo) => (
                <li key={ atributo.id }>{atributo.name}</li>
              ))}
            </ul>
          </section>
          <AddToCartButton product={ product } testid="product-detail-add-to-cart" />
        </div>
        <Assessments productId={ id || 'null' } />
      </div>
    );
  }
}

Product.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }),
}.isRequired;
