import PropTypes from 'prop-types';
import React from 'react';
import { createPortal } from 'react-dom';

import StyledTooltip from './tooltip-style';

const Tooltip = ({
  children,
  className,
  portal,
  transform,
}) => createPortal(
  <StyledTooltip
    className={className}
    style={transform}
  >
    {children}
  </StyledTooltip>,
  portal,
);

Tooltip.defaultProps = {
  children: null,
};

Tooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
  portal: PropTypes.shape({}).isRequired,
  transform: PropTypes.shape({
    transformOrigin: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default Tooltip;
