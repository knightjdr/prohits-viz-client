import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Map from './minimap';
import newPosition from './new-position';
import setRange from './range';
import useSync from './sync/use-sync';
import { minimapDimensions } from './image/dimensions';
import { stateSelector } from '../../../../../state/selector/general';
import { updatePosition } from '../../../../../state/visualization/file/position-actions';

const MinimapContainer = () => {
  const [attached, setAttached] = useState(true);
  const [imageSize, setImageSize] = useState({});

  const dispatch = useDispatch();
  const sync = useSync();

  const dimensions = useSelector(state => stateSelector(state, 'dimensions'));
  const minimap = useSelector(state => stateSelector(state, 'minimap'));
  const position = useSelector(state => stateSelector(state, 'position'));

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

  useEffect(() => {
    const updateDimensions = async () => {
      const newDimensions = await minimapDimensions(minimap.syncedImage || minimap.image);
      setImageSize(newDimensions);
    };
    updateDimensions();
  }, [minimap.image, minimap.syncedImage]);

  return (
    <Map
      attached={attached}
      handleClick={handleClick}
      handleKeyPress={handleKeyPress}
      imageSize={imageSize}
      minimap={minimap}
      pageOutline={pageOutline}
      syncMinimap={synchMinimap}
      toggleAttached={toggleAttached}
      updateMinimap={updateMinimap}
    />
  );
};

export default MinimapContainer;
