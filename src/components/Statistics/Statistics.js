import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <>
        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good: {this.props.good} </p>
          </li>
          <li>
            <p>Neutral: {this.props.neutral} </p>
          </li>
          <li>
            <p>Bad: {this.props.bad}</p>
          </li>
          <li>
            <p>Total: {this.props.total}</p>
          </li>
          <li>
            <p>Postive feedback: {this.props.positivePrecentage} % </p>
          </li>
        </ul>
      </>
    );
  }
}

export default Statistics;
