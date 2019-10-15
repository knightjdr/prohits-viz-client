import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from './image';

import selectActiveTab from '../../../../../../../state/selector/visualization/tab-selector';
import { fixPlot } from '../../../../../../../state/visualization/settings/display-actions';
import { selectData, selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';

const ImageSettingsContainer = ({
  handleChange,
}) => {
  const dispatch = useDispatch();
  const activeTab = useSelector(state => selectActiveTab(state));
  const canTranslate = useSelector(state => selectDataProperty(state, 'dimensions', 'canTranslate'));
  const display = useSelector(state => selectData(state, 'display'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const { plotFixed } = display;
  const {
    cellSize,
    imageType,
    resetRatios,
  } = settings;

  const fixPlotLeft = () => {
    dispatch(fixPlot(activeTab, !plotFixed));
  };


  return (
    <Image
      canTranslate={canTranslate}
      cellSize={cellSize}
      fixPlotLeft={fixPlotLeft}
      handleChange={handleChange}
      imageType={imageType}
      plotFixed={plotFixed}
      resetRatios={resetRatios}
    />
  );
};

ImageSettingsContainer.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ImageSettingsContainer;
