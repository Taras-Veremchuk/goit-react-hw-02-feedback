import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/FeedbackForm/Section';
import Statistics from 'components/FeedbackForm/Statistics';
import FeedbackOptions from 'components/FeedbackForm/FeedbackOptions';
import Notification from 'components/FeedbackForm/Notification';

export class App extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  static propTypes = {
    positive: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  showVisible = () => {
    this.setState({ visible: true });
  };
  onLeaveFeedback = event => {
    switch (event.currentTarget.id) {
      case 'good':
        this.setState(prevState => {
          return { good: prevState.good + 1 };
        });
        this.showVisible();
        break;
      case 'neutral':
        this.setState(prevState => {
          return { neutral: prevState.neutral + 1 };
        });
        this.showVisible();
        break;
      case 'bad':
        this.setState(prevState => {
          return { bad: prevState.bad + 1 };
        });
        this.showVisible();
        break;
      default:
        this.showVisible();
    }
  };

  countTotalFeedback = () => {
    return this.state.neutral + this.state.good + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good * 100) /
        (this.state.neutral + this.state.good + this.state.bad)
    );
  };
  render() {
    const { good, neutral, bad, visible } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
            this={this}
          />
        </Section>
        <Section>
          {visible ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
