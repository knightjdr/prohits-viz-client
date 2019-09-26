import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SettingsHeatmap from './settings__heatmap';
import { stateSelectorProp } from '../../../../../../state/selector/general';
import { updateSetting } from '../../../../../../state/visualization/data/settings-actions';

const SettingsHeatmapContainer = () => {
  const dispatch = useDispatch();
  const settings = useSelector(state => stateSelectorProp(state, 'settings', 'current'));

  const handleChange = (e, name, value) => {
    dispatch(updateSetting(name, value));
  };

  return (
    <SettingsHeatmap
      handleChange={handleChange}
      settings={settings}
    />
  );
};

export default SettingsHeatmapContainer;
