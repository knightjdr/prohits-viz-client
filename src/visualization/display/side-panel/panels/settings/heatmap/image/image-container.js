import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from './image';

import { selectDataProperty } from '../../../../../../../state/selector/visualization/data-selector';
import { updateDisplaySetting } from '../../../../../../../state/visualization/settings/display-actions';

const ImageSettingsContainer = ({
  handleChange,
}) => {
  const dispatch = useDispatch();
  const canTranslate = useSelector((state) => selectDataProperty(state, 'dimensions', 'canTranslate'));
  const plotFixed = useSelector((state) => selectDataProperty(state, 'display', 'plotFixed'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const {
    cellSize,
    imageType,
    resetRatios,
  } = settings;

  const fixPlotLeft = () => {
    dispatch(updateDisplaySetting('plotFixed', !plotFixed));
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
