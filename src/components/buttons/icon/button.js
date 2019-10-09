import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledButton from './button-style';

const IconButton = ({
  icon,
  rotation,
  ...props
}) => (
  <StyledButton
    {...props}
  >
    <FontAwesomeIcon
      icon={icon}
      rotation={rotation}
    />
  </StyledButton>
);

IconButton.defaultProps = {
  rotation: null,
};

IconButton.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  rotation: PropTypes.number,
};

export default IconButton;
