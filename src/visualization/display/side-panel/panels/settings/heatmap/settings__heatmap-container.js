import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SettingsHeatmap from './settings__heatmap';

import selectColumns from '../../../../../../state/selector/visualization/column-selector';
import selectActiveTab from '../../../../../../state/selector/visualization/tab-selector';
import useFilter from '../filter/use-filter';
import { resetImage } from '../../../../../../state/visualization/settings/display-actions';
import { updateSetting } from '../../../../../../state/visualization/settings/settings-actions';
import { selectDataProperty } from '../../../../../../state/selector/visualization/data-selector';

const SettingsHeatmapContainer = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(state => selectActiveTab(state));
  const columns = useSelector(state => selectColumns(state));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const filter = useFilter();

  const handleChange = (e, name, value) => {
    dispatch(updateSetting(activeTab, name, value));
  };

  const handleFilter = (e, name, value) => {
    filter(name, value);
  };

  const handleImageReset = () => {
    dispatch(resetImage(activeTab));
  };

  return (
    <SettingsHeatmap
      columns={columns}
      handleChange={handleChange}
      handleFilter={handleFilter}
      handleImageReset={handleImageReset}
      settings={settings}
    />
  );
};

export default SettingsHeatmapContainer;
