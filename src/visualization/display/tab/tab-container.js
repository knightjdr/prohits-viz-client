import React from 'react';
import { useSelector } from 'react-redux';

import Tab from './tab';

import { selectState, selectStateProperty } from '../../../state/selector/general';

const TabContainer = () => {
  const imageType = useSelector(state => selectStateProperty(state, 'parameters', 'imageType'));
  const tabs = useSelector(state => selectState(state, 'tabs'));

  const { availableAnalysis, availableSnapshots, tabType } = tabs;

  const showMenu = availableAnalysis.length + availableSnapshots.length > 1;

  return (
    <Tab
      imageType={imageType}
      showMenu={showMenu}
      tabType={tabType}
    />
  );
};

export default TabContainer;
