import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Display from './display';

import handlers from '../../../../../scatter/transform/event-handlers';
import { selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { updateDisplaySetting } from '../../../../../../../state/visualization/settings/display-actions';

const DisplayContainer = ({
  handleChange,
}) => {
  const dispatch = useDispatch();

  const transform = useSelector((state) => selectDataProperty(state, 'display', 'transform'));
  const { logTransform } = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const setTransform = (value) => {
    dispatch(updateDisplaySetting('transform', value));
  };

  const handleZoom = (e) => {
    const pseudoE = {
      deltaY: Number(e.currentTarget.dataset.delta),
      preventDefault: () => {},
      currentTarget: document.getElementById('svg-main'),
    };
    const wheelOptions = {
      id: '#plot_points_wheel',
      setTransform,
      transform,
      vertex: 'center',
    };
    handlers.zoom(pseudoE, wheelOptions);
  };

  return (
    <Display
      handleChange={handleChange}
      handleZoom={handleZoom}
      logTransform={logTransform}
    />
  );
};

DisplayContainer.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default DisplayContainer;
