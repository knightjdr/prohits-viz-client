import React from 'react';
import { useDispatch } from 'react-redux';

import SettingsScatter from './settings__scatter';

import { defaultState as defaultDisplayState } from '../../../../../defaults/scatter/display';
import { resetScatter } from '../../../../../../state/visualization/settings/display-actions';
import { updateSetting } from '../../../../../../state/visualization/settings/settings-actions';

const SettingsScatterContainer = () => {
  const dispatch = useDispatch();

  const handleChange = (e, name, value) => {
    dispatch(updateSetting(name, value));
  };

  const handleImageReset = () => {
    dispatch(resetScatter({
      transform: defaultDisplayState.transform,
    }));
  };

  return (
    <SettingsScatter
      handleChange={handleChange}
      handleImageReset={handleImageReset}
    />
  );
};

export default SettingsScatterContainer;
