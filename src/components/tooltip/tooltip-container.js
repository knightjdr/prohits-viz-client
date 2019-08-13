import PropTypes from 'prop-types';
import React from 'react';

import Tooltip from './tooltip';
import transformPosition from './position';
import usePortal from '../../hooks/portal/use-portal';
import usePrevious from '../../hooks/previous/use-previous';

const TooltipContainer = ({
  isOpen,
  name,
  placement,
  position,
  ...props
}) => {
  const portal = usePortal(`${name}-root`);
  const prevIsOpen = usePrevious(isOpen);

  const classes = [];
  const transform = transformPosition(placement, position);

  if (isOpen && !classes.includes('open')) {
    classes.push('open');
  } else if (!isOpen && prevIsOpen) {
    classes.push('close');
  }

  return (
    <Tooltip
      {...props}
      className={classes.join(' ')}
      portal={portal}
      transform={transform}
    />
  );
};

TooltipContainer.defaultProps = {
  isOpen: false,
  name: 'tooltip',
  placement: {
    horizontal: 'left',
    vertical: 'center',
  },
  position: {
    x: 0,
    y: 0,
  },
};

TooltipContainer.propTypes = {
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  placement: PropTypes.shape({
    horizontal: PropTypes.string,
    vertical: PropTypes.string,
  }),
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

export default TooltipContainer;
