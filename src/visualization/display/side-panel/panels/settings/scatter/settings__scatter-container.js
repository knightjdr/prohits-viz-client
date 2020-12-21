import React from 'react';
import { useDispatch } from 'react-redux';

import SettingsScatter from './settings__scatter';

import { defaultState as defaultDisplayState } from '../../../../../defaults/scatter/display';
import { resetScatter } from '../../../../../../state/visualization/settings/display-actions';

const SettingsScatterContainer = () => {
  const dispatch = useDispatch();

  const handleImageReset = () => {
    dispatch(resetScatter({
      transform: defaultDisplayState.transform,
    }));
  };

  return (
    <SettingsScatter
      handleImageReset={handleImageReset}
    />
  );
};

export default SettingsScatterContainer;
