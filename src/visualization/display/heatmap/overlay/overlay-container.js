import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import Overlay from './overlay';

import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';

const OverlayContainer = () => {
  const ref = useRef();

  const { height, width } = useSelector((state) => selectData(state, 'dimensions'));
  const showTooltips = useSelector((state) => selectDataProperty(state, 'display', 'showTooltips'));

  return (
    <Overlay
      height={height}
      ref={ref}
      showTooltips={showTooltips}
      width={width}
    />
  );
};

export default OverlayContainer;
