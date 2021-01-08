import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const drawLabel = (labels, searchLabels, point, options) => {
  const { scaledFontSize, textGap, y } = options;

  if (searchLabels[point.label]) {
    return (
      <text
        dy={(scaledFontSize * 1.2) / 3}
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
        dy={scaledFontSize / 3}
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

const getCustomization = (point, customization, scale) => {
  let color = point.color || '#333333';
  let radius = point.radius || 4;
  let textGap = 8;
  if (customization) {
    if (customization.color) {
      ({ color } = customization);
    }
    if (customization.radius) {
      ({ radius } = customization);
      textGap = radius + 4;
    }
  }
  return {
    color,
    radius: radius / scale,
    textGap: textGap / scale,
  };
};

const Points = ({
  axisLength,
  customization,
  fontSize,
  handleClickLabel,
  labels,
  searchLabels,
  points,
  scale,
}) => {
  const textProperties = {
    scaledFontSize: fontSize / scale,
  };
  return (
    points.map((point, index) => {
      const y = axisLength - point.y;
      const { color, radius, textGap } = getCustomization(point, customization[point.label], scale);
      return (
        <Fragment key={point.label}>
          <circle
            cx={point.x}
            cy={y}
            data-index={index}
            data-label={point.label}
            onClick={handleClickLabel}
            r={radius}
            style={{
              fill: color,
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
                textGap,
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
  customization: PropTypes.shape({}).isRequired,
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
