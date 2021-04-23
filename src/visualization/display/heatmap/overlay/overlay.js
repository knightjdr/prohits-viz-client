import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Selection from './selection/selection-overlay-container';
import Tooltip from './tooltip/tooltip-overlay-container';

const Overlay = forwardRef((
  {
    height,
    showTooltips,
    width,
  },
  ref,
) => (
  <>
    <Tooltip
      gridRef={ref.current}
      show={showTooltips}
    />
    <g>
      <rect
        height={height}
        opacity={0}
        ref={ref}
        width={width}
        x={0}
        y={0}
      />
      <Selection gridRef={ref.current} />
    </g>
  </>
));

Overlay.propTypes = {
  height: PropTypes.number.isRequired,
  showTooltips: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
};

export default Overlay;
