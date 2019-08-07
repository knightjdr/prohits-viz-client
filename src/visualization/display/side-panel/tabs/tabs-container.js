import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tabs from './tabs';
import { stateSelector } from '../../../../state/selector/general';
import { changePanelTab, togglePanel } from '../../../../state/visualization/settings/panel-actions';

const TabsContainer = () => {
  const panel = useSelector(state => stateSelector(state, 'panel'));
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { tab } = e.currentTarget.dataset;
    dispatch(changePanelTab(tab));
  };

  const toggle = () => {
    dispatch(togglePanel());
  };

  return (
    <Tabs
      activeTab={panel.tab}
      handleClick={handleClick}
      panelOpen={panel.open}
      tabs={['info', 'map', 'settings', 'annotation', 'analysis', 'save']}
      togglePanel={toggle}
    />
  );
};

export default TabsContainer;
