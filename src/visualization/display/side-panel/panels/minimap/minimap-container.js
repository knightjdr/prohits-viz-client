import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Map from './minimap';
import newPosition from './new-position';
import setRange from './range';
import useSync from './sync/use-sync';
import { selectData } from '../../../../../state/selector/visualization/data-selector';
import { updatePosition } from '../../../../../state/visualization/settings/position-actions';

const MinimapContainer = () => {
  const [attached, setAttached] = useState(true);

  const dispatch = useDispatch();
  const sync = useSync();

  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const minimap = useSelector(state => selectData(state, 'minimap'));
  const position = useSelector(state => selectData(state, 'position'));

  const pageOutline = setRange(dimensions, position);

  const handleClick = (e) => {
    const [x, y] = newPosition(e, dimensions);
    dispatch(updatePosition(x, y));
  };

  const handleKeyPress = () => {};

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
      handleClick={handleClick}
      handleKeyPress={handleKeyPress}
      minimap={minimap}
      pageOutline={pageOutline}
      syncMinimap={synchMinimap}
      toggleAttached={toggleAttached}
      updateMinimap={updateMinimap}
    />
  );
};

export default MinimapContainer;
