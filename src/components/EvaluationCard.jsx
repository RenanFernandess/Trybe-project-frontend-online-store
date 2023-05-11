import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EvaluationCard extends Component {
  render() {
    const { rating, text, email } = this.props;
    return (
      <div>
        <p data-testid="review-card-email">{ email }</p>
        <p data-testid="review-card-rating">{ rating }</p>
        <p data-testid="review-card-evaluation">{ text }</p>
      </div>
    );
  }
}

EvaluationCard.propTypes = {
  rating: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
