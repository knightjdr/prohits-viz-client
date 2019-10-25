import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import TooltipOverlay from './tooltip-overlay';

import createTooltipProperties from './create-tooltip-properties';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { selectState } from '../../../../state/selector/general';

const defaultTooltipState = {
  open: false,
  position: {
    x: 0,
    y: 0,
  },
  text: '',
};

const TooltipContainer = () => {
  const ref = useRef();
  const [tooltip, setTooltip] = useState(defaultTooltipState);

  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const pagePosition = useSelector(state => selectData(state, 'position'));
  const rowDB = useSelector(state => selectState(state, 'rowDB'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const { height, width } = dimensions;
  const { cellSize } = settings;
  const moveOptions = {
    cellSize,
    pagePosition,
    rowDB,
  };

  const clearTooltip = () => {
    setTooltip(defaultTooltipState);
  };

  const handleMouseMove = (e) => {
    const { text, x, y } = createTooltipProperties(e, moveOptions);
    setTooltip({
      open: true,
      position: {
        x,
        y,
      },
      text,
    });
  };

  return (
    <TooltipOverlay
      handleMouseLeave={clearTooltip}
      handleMouseMove={handleMouseMove}
      height={height}
      ref={ref}
      tooltip={tooltip}
      width={width}
    />
  );
};

const ShowComponent = () => {
  const showTooltips = useSelector(state => selectDataProperty(state, 'display', 'showTooltips'));

  return (
    showTooltips
    && <TooltipContainer />
  );
};

export default ShowComponent;
