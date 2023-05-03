import React from 'react';
import PropTypes from 'prop-types';
import { Sect,Title } from './FeedbackForm.styled';

const Section = ({ title, children }) => {
  return (
    <Sect>
      {title && <Title>{title}</Title>}
      {children}
    </Sect>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
