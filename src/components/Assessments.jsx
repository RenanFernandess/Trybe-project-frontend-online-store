import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AssessmentsForm from './AssessmentsForm';
import EvaluationCard from './EvaluationCard';
import getItemFromLocalStorage, { saveItemToLocalStorage } from '../services';

export default class Assessments extends Component {
  state = {
    assessments: [],
  }

  componentDidUpdate() {
    const { productId } = this.props;
    const { assessments } = this.state;
    if (assessments.length === 0) {
      const assess = getItemFromLocalStorage(productId);
      if (assess) this.setState({ assessments: assess });
    }
  }

  evaluate = (state) => {
    const { productId } = this.props;
    this.setState((prevState) => {
      const assessments = [...prevState.assessments, state];
      saveItemToLocalStorage(productId, assessments);
      return { assessments };
    });
  }

  render() {
    const { assessments } = this.state;

    return (
      <div>
        <AssessmentsForm evaluate={ this.evaluate } />
        { assessments
          .map(({ rating, text, email }, index) => (
            <EvaluationCard
              key={ index }
              rating={ rating }
              text={ text }
              email={ email }
            />
          ))}
      </div>
    );
  }
}

Assessments.propTypes = {
  productId: PropTypes.string.isRequired,
};
