import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Tooltip from '../../../../components/tooltip/tooltip-container';

const TooltipOverlay = forwardRef((
  {
    handleMouseLeave,
    handleMouseMove,
    height,
    tooltip,
    width,
  },
  ref,
) => (
  <>
    <Tooltip
      isOpen={tooltip.open}
      name="cell-tooltip"
      placement={{
        horizontal: 'left',
        vertical: 'center',
        ...tooltip.position,
      }}
    >
      {tooltip.text}
    </Tooltip>
    <g transform="translate(100 100)">
      <rect
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        height={height}
        opacity={0}
        ref={ref}
        width={width}
        x={0}
        y={0}
      />
    </g>
  </>
));

TooltipOverlay.propTypes = {
  handleMouseLeave: PropTypes.func.isRequired,
  handleMouseMove: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  tooltip: PropTypes.shape({
    open: PropTypes.bool,
    position: PropTypes.shape({}),
    text: PropTypes.node,
  }).isRequired,
  width: PropTypes.number.isRequired,
};

export default TooltipOverlay;
