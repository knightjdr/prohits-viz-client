import PropTypes from 'prop-types';
import React from 'react';

const ModalFooter = ({
  footer,
}) => (
  footer
  && (
    <footer>
      {footer}
    </footer>
  )
);

ModalFooter.defaultProps = {
  footer: null,
};

ModalFooter.propTypes = {
  footer: PropTypes.node,
};

export default ModalFooter;
