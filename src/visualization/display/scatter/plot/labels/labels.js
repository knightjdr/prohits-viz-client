import PropTypes from 'prop-types';
import React from 'react';

const Labels = ({
  labels,
}) => (
  labels.length > 0
  && (
    <>
      {
        labels.map((label) => (
          <text
            dy={label.dy}
            fontSize={label.fontSize}
            key={label.label}
            style={label.style}
            textAnchor="start"
            x={label.x}
            y={label.y}
          >
            {label.label}
          </text>
        ))
      }
    </>
  )
);

Labels.propTypes = {
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      dy: PropTypes.number,
      fontSize: PropTypes.number,
      label: PropTypes.string,
      style: PropTypes.shape({}),
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
};

export default Labels;
