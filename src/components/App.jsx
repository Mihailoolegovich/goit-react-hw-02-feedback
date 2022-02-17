import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercent = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total ? Math.round((good / total) * 100) : 0;
  };

  leaveFeedback = event => {
    const { name } = event.currentTarget;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalData = this.countTotalFeedback();
    const message = 'There is no feedback';
    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions onLeaveFeedback={this.leaveFeedback} />

        <Section title="Statistics" />
        <div className="containerStatistics">
          {!totalData ? (
            <Notification message={message} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalData}
              positivePrecentage={this.positivePercent()}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
