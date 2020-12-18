import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SettingsHeatmap from './settings__heatmap';

import { selectOrderedColumnNames } from '../../../../../../state/selector/visualization/column-selector';
import { resetHeatmap } from '../../../../../../state/visualization/settings/display-actions';
import { selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';
import { updateSetting } from '../../../../../../state/visualization/settings/settings-actions';

const SettingsHeatmapContainer = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => selectOrderedColumnNames(state));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const handleChange = (e, name, value) => {
    dispatch(updateSetting(name, value));
  };

  const handleImageReset = () => {
    dispatch(resetHeatmap());
  };

  return (
    <SettingsHeatmap
      columns={columns}
      handleChange={handleChange}
      handleImageReset={handleImageReset}
      settings={settings}
    />
  );
};

export default SettingsHeatmapContainer;
