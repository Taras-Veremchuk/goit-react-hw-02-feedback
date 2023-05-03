import React from 'react';
import PropTypes from 'prop-types';
import { Button, FeedBox } from './FeedbackForm.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedBox>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          id={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </FeedBox>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};
