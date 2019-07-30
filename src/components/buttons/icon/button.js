import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledButton from './button-style';

const IconButton = ({
  icon,
  ...props
}) => (
  <StyledButton
    {...props}
  >
    <FontAwesomeIcon icon={icon} />
  </StyledButton>
);

IconButton.propTypes = {
  icon: PropTypes.shape({}).isRequired,
};

export default IconButton;
