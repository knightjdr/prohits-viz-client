import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

const DPI = window.devicePixelRatio;

const Grid = forwardRef((
  {
    height,
    width,
  },
  ref,
) => (
  <g transform="translate(100 100)">
    <foreignObject
      height={height}
      width={width}
    >
      <canvas
        xmlns="http://www.w3.org/1999/xhtml"
        height={height * DPI}
        ref={ref}
        style={{
          transform: `scale(${1 / DPI})`,
          transformOrigin: 'top left',
        }}
        width={width * DPI}
      />
    </foreignObject>
  </g>
));

Grid.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Grid;
