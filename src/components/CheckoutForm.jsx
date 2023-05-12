import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartContext } from '../context';

class CheckoutForm extends Component {
  state = {
    fullname: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    payment: '',
    isValid: true,
  }

  onChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  submit = () => {
    const { fullname, email, cpf, phone, cep, address, payment } = this.state;
    const EMAIL_REGEXP = /^[\w.]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/gi;
    const isValid = (fullname && cpf && phone && payment
      && cep && address && EMAIL_REGEXP.test(email));
    if (isValid) {
      const { clearCart } = this.context;
      const { history } = this.props;
      clearCart();
      history.push('/');
    } else this.setState({ isValid });
  }

  render() {
    const { fullname, email, cpf, phone, cep, address, isValid } = this.state;
    return (
      <form>
        <h2>Informações do comprador</h2>
        <label htmlFor="fullname">
          <input
            type="text"
            placeholder="Nome Completo"
            name="fullname"
            value={ fullname }
            onChange={ this.onChange }
            id="fullname"
            data-testid="checkout-fullname"
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={ email }
            onChange={ this.onChange }
            id="email"
            data-testid="checkout-email"
          />
        </label>
        <label htmlFor="checkout-cpf">
          <input
            type="text"
            placeholder="CPF"
            name="cpf"
            value={ cpf }
            onChange={ this.onChange }
            id="checkout-cpf"
            data-testid="checkout-cpf"
          />
        </label>
        <label htmlFor="checkout-phone">
          <input
            type="text"
            placeholder="Telefone"
            name="phone"
            value={ phone }
            onChange={ this.onChange }
            id="checkout-phone"
            data-testid="checkout-phone"
          />
        </label>
        <label htmlFor="checkout-cep">
          <input
            type="text"
            placeholder="CEP"
            name="cep"
            value={ cep }
            onChange={ this.onChange }
            id="checkout-cep"
            data-testid="checkout-cep"
          />
        </label>
        <label htmlFor="checkout-address">
          <input
            type="text"
            placeholder="Endereço"
            name="address"
            value={ address }
            onChange={ this.onChange }
            id="checkout-address"
            data-testid="checkout-address"
          />
        </label>
        <h2>Método de pagamento</h2>
        <section>
          <div>
            <label htmlFor="ticket-payment">
              Boleto
              <input
                type="radio"
                id="ticket-payment"
                name="payment"
                defaultValue="ticket"
                onChange={ this.onChange }
                data-testid="ticket-payment"
              />
            </label>
          </div>
          <div>
            <h3>Cartão de Crédito</h3>
            <label htmlFor="visa-payment">
              Visa
              <input
                type="radio"
                id="visa-payment"
                name="payment"
                defaultValue="visa"
                onChange={ this.onChange }
                data-testid="visa-payment"
              />
            </label>
            <label htmlFor="master-payment">
              MasterCard
              <input
                type="radio"
                id="master-payment"
                name="payment"
                defaultValue="master"
                onChange={ this.onChange }
                data-testid="master-payment"
              />
            </label>
            <label htmlFor="elo-payment">
              Elo
              <input
                type="radio"
                id="elo-payment"
                name="payment"
                defaultValue="elo"
                onChange={ this.onChange }
                data-testid="elo-payment"
              />
            </label>
          </div>
        </section>
        <button type="button" onClick={ this.submit } data-testid="checkout-btn">
          Comprar
        </button>
        { !isValid && <p data-testid="error-msg">Campos inválidos</p> }
      </form>
    );
  }
}

CheckoutForm.contextType = CartContext;

CheckoutForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(CheckoutForm);
