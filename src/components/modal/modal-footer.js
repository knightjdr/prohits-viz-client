import PropTypes from 'prop-types';
import React from 'react';

const ModalFooter = ({
  footer,
}) => (
  footer
  && (
    <footer>
      footer
    </footer>
  )
);

ModalFooter.propTypes = {
  footer: PropTypes.bool.isRequired,
};

export default ModalFooter;
