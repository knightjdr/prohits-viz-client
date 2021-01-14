import React from 'react';
import { useDispatch } from 'react-redux';

import SettingsScatter from './settings__scatter';

import { defaultState as defaultDisplayState } from '../../../../../defaults/scatter/display';
import {
  resetScatter,
  resetScatterTransformations,
} from '../../../../../../state/visualization/settings/display-actions';

const SettingsScatterContainer = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetScatter({
      transform: defaultDisplayState.transform,
    }));
  };

  const handleTransformationReset = () => {
    dispatch(resetScatterTransformations({
      transform: defaultDisplayState.transform,
    }));
  };

  return (
    <SettingsScatter
      handleReset={handleReset}
      handleTransformationReset={handleTransformationReset}
    />
  );
};

export default SettingsScatterContainer;
