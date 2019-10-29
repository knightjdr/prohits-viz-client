import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Marker from './marker';

import { changeMarkerSetting, clearAllMarkers } from '../../../../../../state/visualization/markup/marker-actions';
import { selectData } from '../../../../../../state/selector/visualization/data-selector';

const MarkerContainer = () => {
  const dispatch = useDispatch();
  const markers = useSelector(state => selectData(state, 'markers'));

  const { color, record, show } = markers;

  const handleClearAll = () => {
    dispatch(clearAllMarkers());
  };

  const handleColorChange = (newColor) => {
    dispatch(changeMarkerSetting('color', newColor));
  };

  const handleSettingChange = (e, id, value) => {
    dispatch(changeMarkerSetting(id, value));
  };

  const handleToggleMarkers = () => {
    dispatch(changeMarkerSetting('show', !show));
  };

  return (
    <Marker
      color={color}
      handleClearAll={handleClearAll}
      handleColorChange={handleColorChange}
      handleSettingChange={handleSettingChange}
      handleToggleMarkers={handleToggleMarkers}
      record={record}
      show={show}
    />
  );
};

export default MarkerContainer;
