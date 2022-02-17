import React, { Component } from 'react';
import propTypes from 'prop-types';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, precentage } = this.props;
    return (
      <>
        <p>
          Good: <b>{good}</b>
        </p>
        <p>
          Neutral: <b>{neutral}</b>
        </p>
        <p>
          Bad: <b>{bad}</b>
        </p>
        <p>
          Total: <b>{total}</b>
        </p>
        <p>
          Postive feedback: <b>{precentage}</b> %
        </p>
      </>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  precentage: propTypes.number.isRequired,
};
