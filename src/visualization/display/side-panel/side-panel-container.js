import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SidePanel from './side-panel';
import useSmallScreen from '../../../hooks/small-screen/use-small-screen';
import { selectState, selectStateProperty } from '../../../state/selector/general';
import { togglePanel } from '../../../state/visualization/settings/panel-actions';

const tabs = {
  circheatmap: ['info'],
  dotplot: ['info', 'minimap', 'settings', 'markup', 'analysis', 'save'],
  heatmap: ['info', 'minimap', 'settings', 'markup', 'analysis', 'save'],
  scatter: ['info', 'settings', 'markup', 'customization', 'analysis', 'save'],
};

const SidePanelContainer = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [translation, setTranslation] = useState(0);
  const imageType = useSelector((state) => selectStateProperty(state, 'parameters', 'imageType'));
  const panel = useSelector((state) => selectState(state, 'panel'));

  const isSmallScreen = useSmallScreen();

  useEffect(() => {
    if (isSmallScreen) {
      dispatch(togglePanel(false));
    }
  }, [dispatch, isSmallScreen]);

  const toggle = () => {
    dispatch(togglePanel());
  };

  useEffect(() => {
    const { width: panelWidth } = ref.current.getBoundingClientRect();
    const panelTranslation = -(tabs[imageType].indexOf(panel.tab)) * panelWidth;
    setTranslation(panelTranslation);
  }, [imageType, panel.tab]);

  return (
    <SidePanel
      imageType={imageType}
      isOpen={panel.open}
      ref={ref}
      translation={translation}
      togglePanel={toggle}
    />
  );
};

export default SidePanelContainer;
