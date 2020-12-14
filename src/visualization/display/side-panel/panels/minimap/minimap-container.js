import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Map from './minimap';

import calculatePageOutline from './calculate-page-outline';
import useSync from './sync/use-sync';
import { selectData } from '../../../../../state/selector/visualization/data-selector';

const MinimapContainer = () => {
  const [attached, setAttached] = useState(true);
  const sync = useSync();

  const dimensions = useSelector((state) => selectData(state, 'dimensions'));
  const minimap = useSelector((state) => selectData(state, 'minimap'));
  const position = useSelector((state) => selectData(state, 'position'));

  const pageOutline = calculatePageOutline(dimensions, position);

  const toggleAttached = () => {
    setAttached(!attached);
  };

  const synchMinimap = () => {
    sync(false);
  };

  const updateMinimap = () => {
    sync(true);
  };

  return (
    <Map
      attached={attached}
      minimap={minimap}
      pageOutline={pageOutline}
      syncMinimap={synchMinimap}
      toggleAttached={toggleAttached}
      updateMinimap={updateMinimap}
    />
  );
};

export default MinimapContainer;
