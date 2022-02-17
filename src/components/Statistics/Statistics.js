import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    console.log(this.props);

    return (
      <>
        {/* <p>There is no feedback</p> */}
        <ul>
          <li>
            <p>Good: <b>{this.props.good}</b></p>
          </li>
          <li>
            <p>Neutral: <b>{this.props.neutral}</b></p>
          </li>
          <li>
            <p>Bad: <b>{this.props.bad}</b></p>
          </li>
          <li>
            <p>Total: <b>{this.props.total}</b></p>
          </li>
          <li>
            <p>Postive feedback: <b>{this.props.positivePrecentage}</b> %</p>
          </li>
        </ul>
      </>
    );
  }
}

export default Statistics;
