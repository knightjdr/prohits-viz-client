import PropTypes from 'prop-types';
import React from 'react';

const ModalHeader = ({
  title,
}) => (
  title
  && (
    <header>
      <h1>{title}</h1>
    </header>
  )
);

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ModalHeader;
