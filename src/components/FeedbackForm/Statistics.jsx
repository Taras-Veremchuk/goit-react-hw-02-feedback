import React from 'react';
import PropTypes from 'prop-types';
import { StatBox, StatText } from './FeedbackForm.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatBox>
      <StatText>Good:{good}</StatText>
      <StatText>
        Neutral:
        {neutral}
      </StatText>
      <StatText>
        Bad:
        {bad}
      </StatText>
      <StatText>
        Total:
        {total()}
      </StatText>
      <StatText>
        Positive feedback:
        {positivePercentage()}%
      </StatText>
    </StatBox>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
