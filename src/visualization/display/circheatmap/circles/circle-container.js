import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import Circle from './circle';

import calculateRadii from './calculate-radii';
import defineSegments from './define-segments';
import initializeColorGradient from '../../../../utils/color/initialize-color-gradient';
import setRangePartial from '../../../../utils/set-range-partial';

const NUM_COLORS = 101;

const CircleContainer = ({
  attribute,
  color,
  handleMouseEnter,
  handleMouseLeave,
  max,
  min,
  radius,
  readouts,
  thickness,
  values,
}) => {
  const gradient = useMemo(
    () => initializeColorGradient(color, NUM_COLORS),
    [color],
  );

  const radii = useMemo(
    () => calculateRadii(radius, thickness),
    [thickness, radius],
  );

  const range = useMemo(
    () => setRangePartial(min, max, 0, NUM_COLORS),
    [max, min],
  );

  const segments = useMemo(
    () => defineSegments(
      values,
      readouts,
      {
        gradient,
        radii,
        range,
      },
    ),
    [color, gradient, range, readouts, values],
  );

  return (
    <Circle
      attribute={attribute}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
      radii={radii}
      segments={segments}
    />
  );
};

CircleContainer.propTypes = {
  attribute: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  readouts: PropTypes.arrayOf(PropTypes.string).isRequired,
  thickness: PropTypes.number.isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default CircleContainer;
