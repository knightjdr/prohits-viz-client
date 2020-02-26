import PropTypes from 'prop-types';
import React from 'react';

const ModalHeader = ({
  title,
}) => (
  title
  && (
    <header className="modal__header">
      <h1>{title}</h1>
    </header>
  )
);

ModalHeader.propTypes = {
  title: PropTypes.node.isRequired,
};

export default ModalHeader;
