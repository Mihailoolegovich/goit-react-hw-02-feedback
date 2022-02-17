import React, { Component } from 'react';
// import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from './Statistics';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeadback = good + neutral + bad;
    return totalFeadback;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    let prosent = total ? Math.round((good / total) * 100) : 0;

    return prosent;
  };

  leaveFeedback = event => {
    const { name } = event.currentTarget;

    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  

  render() {
   

    const { good, neutral, bad } = this.state;
    // const totalFeadback = good + neutral + bad;

    return (
      <div>
        <h2>Please leave feedback</h2>
        {/* <FeedbackOptions onLeaveFeedback={this.leaveFeedback()} /> */}
        <ul>
            <li>
              <button type="button" name="good" onClick={this.leaveFeedback}>
                Good
              </button>
            </li>
            <li>
              <button type="button" name="neutral" onClick={this.leaveFeedback}>
                Neutral
              </button>
            </li>
            <li>
              <button type="button" name="bad" onClick={this.leaveFeedback}>
                Bad
              </button>
            </li>
          </ul>  
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePrecentage={this.countPositiveFeedbackPercentage()}
        />

       
      </div>
    );
  }
}

export default App;
