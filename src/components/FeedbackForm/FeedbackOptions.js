import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          type="button"
          id={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};
