import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SettingsHeatmap from './settings__heatmap';
import useFilter from '../filter/use-filter';
import { stateSelectorProp } from '../../../../../../state/selector/general';
import { resetImage } from '../../../../../../state/visualization/settings/display-actions';
import { resetSettings, updateSetting } from '../../../../../../state/visualization/data/settings-actions';

const SettingsHeatmapContainer = () => {
  const dispatch = useDispatch();
  const settings = useSelector(state => stateSelectorProp(state, 'settings', 'current'));

  const filter = useFilter();

  const handleChange = (e, name, value) => {
    dispatch(updateSetting(name, value));
  };

  const handleFilter = (e, name, value) => {
    filter(name, value);
  };

  const handleSettingReset = () => {
    dispatch(resetSettings());
  };

  const handleImageReset = () => {
    dispatch(resetImage());
  };

  return (
    <SettingsHeatmap
      handleChange={handleChange}
      handleFilter={handleFilter}
      handleImageReset={handleImageReset}
      handleSettingReset={handleSettingReset}
      settings={settings}
    />
  );
};

export default SettingsHeatmapContainer;
