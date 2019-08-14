import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tabs from './tabs';
import { stateSelector, stateSelectorProp } from '../../../../state/selector/general';
import { changePanelTab, togglePanel } from '../../../../state/visualization/settings/panel-actions';

const tabLabels = (imageType) => {
  switch (imageType) {
    case 'circ-heatmap':
      return ['info', 'settings'];
    default:
      return ['info', 'minimap', 'settings', 'annotation', 'analysis', 'save'];
  }
};

const TabsContainer = () => {
  const imageType = useSelector(state => stateSelectorProp(state, 'parameters', 'imageType'));
  const panel = useSelector(state => stateSelector(state, 'panel'));
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
