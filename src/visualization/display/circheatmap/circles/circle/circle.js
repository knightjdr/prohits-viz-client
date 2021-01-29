import PropTypes from 'prop-types';
import React from 'react';

import Segment from './segment';

import './circle.css';

const Circle = ({
  attribute,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  radii,
  segments,
}) => (
  <g transform="scale(0.85)">
    {
      segments.map((segment, index) => {
        const path = `
          M ${segment.a.x} ${segment.a.y}
          A ${radii.outer} ${radii.outer} 0 ${segment.b.arc} 1 ${segment.b.x} ${segment.b.y}
          L ${segment.c.x} ${segment.c.y}
          A ${radii.inner} ${radii.inner} 0 ${segment.d.arc} 0 ${segment.d.x} ${segment.d.y}
          Z
        `;
        return (
          <Segment
            attribute={attribute}
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            key={segment.readout}
            path={path}
            segment={segment}
            segmentIndex={index}
          />
        );
      })
    }
  </g>
);

Circle.propTypes = {
  attribute: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  radii: PropTypes.shape({
    inner: PropTypes.number,
    outer: PropTypes.number,
  }).isRequired,
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      a: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
      }),
      b: PropTypes.shape({
        arc: PropTypes.number,
        x: PropTypes.number,
        y: PropTypes.number,
      }),
      c: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
      }),
      d: PropTypes.shape({
        arc: PropTypes.number,
        x: PropTypes.number,
        y: PropTypes.number,
      }),
      fill: PropTypes.string,
      readout: PropTypes.string,
    }),
  ).isRequired,
};

export default Circle;
