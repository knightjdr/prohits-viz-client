import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButton = ({
  icon,
  type,
  ...props
}) => (
  <button
    type="button"
    {...props}
  >
    <FontAwesomeIcon icon={icon} />
  </button>
);

IconButton.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  type: PropTypes.string.isRequired,
};

export default IconButton;
