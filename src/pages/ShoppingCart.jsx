import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductCardInCart } from '../components';
import { CartContext } from '../context';

export default class ShoppingCart extends Component {
  render() {
    const { cartProducts, totalPrice } = this.context;
    return (
      <div>
        <section>
          { cartProducts.length
            ? (
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
                )))
            : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        </section>
        <section>
          <p>
            Preço total: R$
            { totalPrice.toFixed(2) }
          </p>
          <Link to="/Checkout" data-testid="checkout-products">
            Finalizar compra
          </Link>
        </section>
      </div>
    );
  }
}

ShoppingCart.contextType = CartContext;
