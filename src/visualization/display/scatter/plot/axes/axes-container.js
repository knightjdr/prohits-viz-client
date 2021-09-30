import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import Axes from './axes';

import { selectDataProperty } from '../../../../../state/selector/visualization/data-selector';

const AxesContainer = ({
  axes,
  ticks,
}) => {
  const axisLength = useSelector((state) => selectDataProperty(state, 'dimensions', 'height'));
  const transform = useSelector((state) => selectDataProperty(state, 'display', 'transform'));
  const { fontSize } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  return (
    <Axes
      axes={axes}
      axisLength={axisLength}
      fontSize={fontSize}
      ticks={ticks}
      transform={transform}
    />
  );
};

AxesContainer.propTypes = {
  axes: PropTypes.shape({
    x: PropTypes.shape({
      x1: PropTypes.number,
      x2: PropTypes.number,
      y1: PropTypes.number,
      y2: PropTypes.number,
    }),
    y: PropTypes.shape({
      x1: PropTypes.number,
      x2: PropTypes.number,
      y1: PropTypes.number,
      y2: PropTypes.number,
    }),
  }).isRequired,
  ticks: PropTypes.shape({
    x: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.number,
        x: PropTypes.number,
      }),
    ),
    y: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.number,
        y: PropTypes.number,
      }),
    ),
  }).isRequired,
};

export default AxesContainer;
