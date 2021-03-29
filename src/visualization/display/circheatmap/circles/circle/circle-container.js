import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import Circle from './circle';

import calculateRadii from './calculate-radii';
import defineSegments from './define-segments';
import initializeColorGradient from '../../../../../utils/color/initialize-color-gradient';
import removeDuplicates from '../../../../../utils/remove-duplicates';
import setRangePartial from '../../../../../utils/set-range-partial';
import { selectData, selectDataProperty } from '../../../../../state/selector/visualization/data-selector';
import { updateLabel } from '../../../../../state/visualization/scatter/label-actions';
import { updatePOI } from '../../../../../state/visualization/analysis/poi-actions';

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
  const dispatch = useDispatch();

  const labels = useSelector((state) => selectDataProperty(state, 'labels', 'status'));
  const poi = useSelector((state) => selectData(state, 'poi'));

  const gradient = useMemo(
    () => initializeColorGradient(color, NUM_COLORS),
    [color],
  );

  const radii = useMemo(
    () => calculateRadii(radius, thickness),
    [thickness, radius],
  );

  const range = useMemo(
    () => setRangePartial(min, max, 0, 100),
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
    [color, gradient, radii, range, readouts, values],
  );

  const handleClick = (e) => {
    const { label, segmentIndex: index } = e.target.dataset;
    const numIndex = Number(index);
    const removePoi = Boolean(labels[label]);

    const updatedPOI = {
      readouts: removePoi
        ? poi.readouts.filter((readout) => readout !== numIndex)
        : removeDuplicates([...poi.readouts, numIndex]),
    };

    batch(() => {
      dispatch(updateLabel(label));
      dispatch(updatePOI(updatedPOI));
    });
  };

  return (
    <Circle
      attribute={attribute}
      handleClick={handleClick}
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
