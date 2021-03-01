import React from 'react';
import { useDispatch } from 'react-redux';

import SettingsCircheatmap from './settings__circheatmap';

import { resetCircheatmap } from '../../../../../../state/visualization/settings/display-actions';

const SettingsCircheatmapContainer = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetCircheatmap({}));
  };

  return (
    <SettingsCircheatmap
      handleReset={handleReset}
    />
  );
};

export default SettingsCircheatmapContainer;
