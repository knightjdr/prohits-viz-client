import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SidePanel from './side-panel';
import useSmallScreen from '../../../hooks/small-screen/use-small-screen';
import { selectState } from '../../../state/selector/general';
import { togglePanel } from '../../../state/visualization/settings/panel-actions';

const SidePanelContainer = () => {
  const isSmallScreen = useSmallScreen();
  const parameters = useSelector(state => selectState(state, 'panel'));
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSmallScreen) {
      dispatch(togglePanel(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    dispatch(togglePanel());
  };

  return (
    <SidePanel
      activeTab={parameters.tab}
      isOpen={parameters.open}
      togglePanel={toggle}
    />
  );
};

export default SidePanelContainer;
