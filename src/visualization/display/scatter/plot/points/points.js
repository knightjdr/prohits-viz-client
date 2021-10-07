import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const getCustomization = (point, customization, scale, defaultRadius) => {
  let color = point.color || '#333333';
  let radius = point.radius || defaultRadius;
  if (customization) {
    if (customization.color) {
      ({ color } = customization);
    }
    if (customization.radius) {
      ({ radius } = customization);
    }
  }
  return {
    color,
    radius: radius / scale,
  };
};

const Points = ({
  axisLength,
  customization,
  handleClickLabel,
  points,
  radius: defaultRadius,
  scale,
}) => (
  points.map((point, index) => {
    const y = axisLength - point.y;
    const { color, radius } = getCustomization(point, customization[point.label], scale, defaultRadius);
    return (
      <Fragment key={point.label}>
        <circle
          className="scatter-point"
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
      </Fragment>
    );
  })
);

Points.propTypes = {
  axisLength: PropTypes.number.isRequired,
  customization: PropTypes.shape({}).isRequired,
  handleClickLabel: PropTypes.func.isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      highlight: PropTypes.bool,
      label: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
  radius: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
};

export default Points;
