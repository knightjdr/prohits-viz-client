import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledButton from './button-style';

const IconButton = ({
  icon,
  rotation,
  size,
  ...props
}) => (
  <StyledButton
    {...props}
  >
    <FontAwesomeIcon
      icon={icon}
      rotation={rotation}
      size={size}
    />
  </StyledButton>
);

IconButton.defaultProps = {
  rotation: null,
  size: '1x',
};

IconButton.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  rotation: PropTypes.number,
  size: PropTypes.string,
};

export default IconButton;
