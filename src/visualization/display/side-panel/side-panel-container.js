import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SidePanel from './side-panel';
import useSmallScreen from '../../../hooks/small-screen/use-small-screen';
import { stateSelectorProp } from '../../../state/selector/general';
import { togglePanel } from '../../../state/visualization/settings/panel-actions';

const SidePanelContainer = () => {
  const isSmallScreen = useSmallScreen();
  const isOpen = useSelector(state => stateSelectorProp(state, 'panel', 'open'));
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
      isOpen={isOpen}
      togglePanel={toggle}
    />
  );
};

export default SidePanelContainer;
