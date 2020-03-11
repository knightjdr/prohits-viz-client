import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import './canvas.css';

const Canvas = forwardRef((
  {
    pageDimensions,
  },
  ref,
) => (
  <g>
    <foreignObject
      x="100"
      y="100"
      height={pageDimensions.height}
      width={pageDimensions.width}
    >
      <canvas
        xmlns="http://www.w3.org/1999/xhtml"
        className="heatmap__canvas"
        height={pageDimensions.canvasHeight}
        ref={ref}
        style={{ transform: pageDimensions.transform }}
        width={pageDimensions.canvasWidth}
      />
    </foreignObject>
  </g>
));

Canvas.propTypes = {
  pageDimensions: PropTypes.shape({
    canvasHeight: PropTypes.number,
    canvasWidth: PropTypes.number,
    height: PropTypes.number,
    transform: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
};

export default Canvas;
