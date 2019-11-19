import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

import StyledTooltip from './tooltip-style';

const Tooltip = forwardRef((
  {
    children,
    className,
    portal,
    ...props
  },
  ref,
) => createPortal(
  <StyledTooltip
    className={className}
    ref={ref}
    {...props}
  >
    {children}
  </StyledTooltip>,
  portal,
));

Tooltip.defaultProps = {
  children: null,
  className: undefined,
};

Tooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  portal: PropTypes.shape({}).isRequired,
};

export default Tooltip;
