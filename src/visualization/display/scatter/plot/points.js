import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const drawLabel = (labels, searchLabels, point, options) => {
  const { scaledFontSize, textGap, y } = options;
  if (searchLabels[point.label]) {
    return (
      <text
        dominantBaseline="middle"
        fontSize={scaledFontSize * 1.2}
        style={{
          fontWeight: 'bold',
        }}
        textAnchor="start"
        x={point.x + textGap}
        y={y}
      >
        {point.label}
      </text>
    );
  } if (labels[point.label]) {
    return (
      <text
        dominantBaseline="middle"
        fontSize={scaledFontSize}
        textAnchor="start"
        x={point.x + textGap}
        y={y}
      >
        {point.label}
      </text>
    );
  }
  return null;
};

const Points = ({
  axisLength,
  fontSize,
  handleClickLabel,
  labels,
  searchLabels,
  points,
  scale,
}) => {
  const radius = 4 / scale;
  const textProperties = {
    scaledFontSize: fontSize / scale,
    textGap: 8 / scale,
  };
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
            drawLabel(
              labels,
              searchLabels,
              point,
              {
                ...textProperties,
                x: point.x,
                y,
              },
            )
          }
        </Fragment>
      );
    })
  );
};

Points.propTypes = {
  axisLength: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
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
  searchLabels: PropTypes.shape({}).isRequired,
  scale: PropTypes.number.isRequired,
};

export default Points;
