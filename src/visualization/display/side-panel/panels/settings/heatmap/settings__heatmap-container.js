import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SettingsHeatmap from './settings__heatmap';

import columnSelector from '../../../../../../state/selector/visualization/column-selector';
import useFilter from '../filter/use-filter';
import { resetImage } from '../../../../../../state/visualization/settings/display-actions';
import { resetSettings, updateSetting } from '../../../../../../state/visualization/data/settings-actions';
import { stateSelectorProp } from '../../../../../../state/selector/general';

const SettingsHeatmapContainer = () => {
  const dispatch = useDispatch();
  const columns = useSelector(state => columnSelector(state));
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
      columns={columns}
      handleChange={handleChange}
      handleFilter={handleFilter}
      handleImageReset={handleImageReset}
      handleSettingReset={handleSettingReset}
      settings={settings}
    />
  );
};

export default SettingsHeatmapContainer;
