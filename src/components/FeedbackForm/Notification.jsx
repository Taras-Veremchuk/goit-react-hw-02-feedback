import React from 'react';
import PropTypes from 'prop-types';
import { NotText } from './FeedbackForm.styled';

const Notification = ({ message }) => {
  return <NotText>{message}</NotText>;
};
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
