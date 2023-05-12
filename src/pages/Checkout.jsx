import React, { Component } from 'react';
import { ProductCardInCart, CheckoutForm } from '../components';
import { CartContext } from '../context';

export default class Checkout extends Component {
  render() {
    const { cartProducts, totalPrice } = this.context;

    return (
      <div style={ { display: 'flex' } }>
        <section>
          <div>
            {
              cartProducts
                .map(({ title, id, price, thumbnail, quantityInCart }, index) => (
                  <ProductCardInCart
                    key={ id }
                    title={ title }
                    price={ price }
                    image={ thumbnail }
                    quantity={ quantityInCart }
                    id={ id }
                    index={ index }
                  />
                ))
            }
          </div>
          <p>
            Preço total: R$
            { totalPrice.toFixed(2) }
          </p>
        </section>
        <CheckoutForm />
      </div>
    );
  }
}

Checkout.contextType = CartContext;
