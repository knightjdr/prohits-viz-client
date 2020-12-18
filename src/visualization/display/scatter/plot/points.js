import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const Points = ({
  axisLength,
  handleClickLabel,
  labels,
  points,
  scale,
}) => {
  const fontSize = 12 / scale;
  const radius = 4 / scale;
  const textGap = 8 / scale;
  return (
    points.map((point) => {
      const y = axisLength - point.y;
      return (
        <Fragment key={point.label}>
          <circle
            cx={point.x}
            cy={y}
            data-label={point.label}
            onClick={handleClickLabel}
            r={radius}
            style={{
              fill: point.color,
            }}
          >
            <title>{point.label}</title>
          </circle>
          {
            labels[point.label]
            && (
              <text
                dominantBaseline="middle"
                fontSize={fontSize}
                textAnchor="start"
                x={point.x + textGap}
                y={y}
              >
                {point.label}
              </text>
            )
          }
        </Fragment>
      );
    })
  );
};

Points.propTypes = {
  axisLength: PropTypes.number.isRequired,
  handleClickLabel: PropTypes.func.isRequired,
  labels: PropTypes.shape({}).isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      highlight: PropTypes.bool,
      label: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
  scale: PropTypes.number.isRequired,
};

export default Points;
