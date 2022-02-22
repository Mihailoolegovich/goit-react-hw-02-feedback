import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from './Statistics/Notification';
import Statistics from './Statistics';
import Section from './Section';
import options from './data/options.json';

// const options = options;

class App extends Component {
  state = {
    // options: options,
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = options;

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
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!totalData ? (
            <Notification message={message} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalData}
              percentage={this.positivePercent()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
