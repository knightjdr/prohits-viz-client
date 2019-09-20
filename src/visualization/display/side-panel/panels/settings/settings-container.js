import React from 'react';
import { useSelector } from 'react-redux';

import Settings from './settings';
import { stateSelectorProp } from '../../../../../state/selector/general';

const SettingsContainer = () => {
  const imageType = useSelector(state => stateSelectorProp(state, 'parameters', 'imageType'));

  return (
    <Settings
      imageType={imageType}
    />
  );
};

export default SettingsContainer;
