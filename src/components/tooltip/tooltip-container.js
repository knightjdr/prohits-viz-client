import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

import Tooltip from './tooltip';

import defineClassName from '../modal/define-classname';
import positionFromCursor from '../modal/position-from-cursor';
import usePortal from '../../hooks/portal/use-portal';
import usePrevious from '../../hooks/previous/use-previous';

const TooltipContainer = ({
  isOpen,
  name,
  placement,
  ...props
}) => {
  const ref = useRef(null);
  const portal = usePortal(`${name}-root`);
  const wasOpen = usePrevious(isOpen);

  useEffect(() => {
    if (isOpen) {
      positionFromCursor(ref.current, placement);
    }
  }, [isOpen, placement, ref]);

  const className = defineClassName(isOpen, wasOpen);

  return (
    <Tooltip
      {...props}
      className={className}
      portal={portal}
      ref={ref}
    />
  );
};

TooltipContainer.defaultProps = {
  isOpen: false,
  name: 'tooltip',
};

TooltipContainer.propTypes = {
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  placement: PropTypes.shape({
    horizontal: PropTypes.string,
    vertical: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default TooltipContainer;
