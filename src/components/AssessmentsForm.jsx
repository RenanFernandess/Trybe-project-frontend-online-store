import React, { Component } from 'react';
import PropTypes from 'prop-types';

const THREE = 3;
const FOUR = 4;
const FIVE = 5;
const RATING_ARRAY = [1, 2, THREE, FOUR, FIVE];

export default class AssessmentsForm extends Component {
  state = {
    rating: 0,
    text: '',
    email: '',
    isValid: true,
  }

  onChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  toAssess = ({ target: { value } }) => {
    this.setState(({ rating }) => ({
      rating: (value === rating) ? '0' : value,
    }));
  }

  submitReview = () => {
    const { email, rating } = this.state;
    const { evaluate } = this.props;
    const EMAIL_REGEXP = /^[\w.]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/gi;
    const isValid = (rating > 0 && EMAIL_REGEXP.test(email));
    if (isValid) {
      evaluate(this.state);
      this.setState({
        rating: 0,
        text: '',
        email: '',
        isValid,
      });
    } else this.setState({ isValid });
  }

  render() {
    const { rating, text, email, isValid } = this.state;
    return (
      <form>
        <label htmlFor="detail-email">
          <input
            type="email"
            id="detail-email"
            name="email"
            value={ email }
            data-testid="product-detail-email"
            required
            onChange={ this.onChange }
          />
        </label>
        <div>
          { RATING_ARRAY.map((value) => (
            <input
              key={ value }
              type="checkbox"
              data-testid={ `${value}-rating` }
              value={ value }
              onChange={ this.toAssess }
              checked={ (value <= rating) }
            />
          )) }
        </div>
        <label htmlFor="detail-evaluation">
          <textarea
            id="detail-evaluation"
            name="text"
            value={ text }
            data-testid="product-detail-evaluation"
            onChange={ this.onChange }
          />
        </label>
        <button
          onClick={ this.submitReview }
          type="button"
          data-testid="submit-review-btn"
        >
          Avaliar
        </button>
        { !isValid && <p data-testid="error-msg">Campos inválidos</p> }
      </form>
    );
  }
}

AssessmentsForm.propTypes = {
  evaluate: PropTypes.func.isRequired,
};
