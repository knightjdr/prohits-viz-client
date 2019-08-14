import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Map from './minimap';
import newPosition from './new-position';
import setRange from './range';
import { stateSelector } from '../../../../../state/selector/general';
import { updatePosition } from '../../../../../state/visualization/file/position-actions';

const MinimapContainer = () => {
  const [attached, setAttached] = useState(true);

  const dispatch = useDispatch();

  const dimensions = useSelector(state => stateSelector(state, 'dimensions'));
  const minimap = useSelector(state => stateSelector(state, 'minimap'));
  const position = useSelector(state => stateSelector(state, 'position'));

  const range = setRange(dimensions, position);

  const handleClick = (e) => {
    const [x, y] = newPosition(e, dimensions);
    dispatch(updatePosition(x, y));
  };

  const toggleAttached = () => {
    setAttached(!attached);
  };

  return (
    <Map
      attached={attached}
      handleClick={handleClick}
      minimap={minimap}
      range={range}
      toggleAttached={toggleAttached}
    />
  );
};

export default MinimapContainer;
