import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tabs from './tabs';
import { selectState, selectStateProperty } from '../../../../state/selector/general';
import { changePanelTab, togglePanel } from '../../../../state/visualization/settings/panel-actions';

const tabLabels = (imageType) => {
  if (imageType === 'circheatmap') {
    return ['info', 'settings', 'markup', 'analysis', 'save'];
  } if (imageType === 'dotplot' || imageType === 'heatmap') {
    return ['info', 'minimap', 'settings', 'markup', 'analysis', 'save'];
  } if (imageType === 'scatter') {
    return ['info', 'settings', 'markup', 'customization', 'analysis', 'save'];
  }
  return ['info'];
};

const TabsContainer = () => {
  const imageType = useSelector((state) => selectStateProperty(state, 'parameters', 'imageType'));
  const panel = useSelector((state) => selectState(state, 'panel'));
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { tab } = e.currentTarget.dataset;
    dispatch(changePanelTab(tab));
  };

  const toggle = () => {
    dispatch(togglePanel());
  };

  const tabs = tabLabels(imageType);

  return (
    <Tabs
      activeTab={panel.tab}
      handleClick={handleClick}
      panelOpen={panel.open}
      tabs={tabs}
      togglePanel={toggle}
    />
  );
};

export default TabsContainer;
