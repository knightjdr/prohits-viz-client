import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Heatmap from './heatmap';
import plotDimensions from './dimensions/plot';
import plotTranslate from './dimensions/translate';
import selectActiveTab from '../../../state/selector/visualization/tab-selector';
import usePlotScroll from './dimensions/use-plot-scroll';
import useWindowDimension from '../../../hooks/window-size/use-window-dimension';
import { setDimensions } from '../../../state/visualization/settings/dimension-actions';
import { selectDataProperty } from '../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../state/selector/general';

const HeatmapContainer = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const activeTab = useSelector(state => selectActiveTab(state));
  const columns = useSelector(state => selectDataProperty(state, 'columns', 'order'));
  const panelOpen = useSelector(state => selectStateProperty(state, 'panel', 'open'));
  const plotFixed = useSelector(state => selectDataProperty(state, 'display', 'plotFixed'));
  const rowOrder = useSelector(state => selectDataProperty(state, 'rows', 'order'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const windowDimensions = useWindowDimension(50);
  usePlotScroll(ref, 50);

  const { cellSize } = settings;
  const cellHeight = rowOrder.length;
  const cellWidth = columns.length;

  const dimensions = useMemo(
    () => plotDimensions(
      cellSize,
      cellHeight,
      cellWidth,
      windowDimensions.height,
      windowDimensions.width,
    ),
    [cellSize, cellHeight, cellWidth, windowDimensions.height, windowDimensions.width],
  );

  const translation = useMemo(
    () => plotTranslate(
      dimensions.width.canTranslate,
      plotFixed,
      panelOpen,
      windowDimensions.width,
      dimensions.width.wrapper,
    ),
    [
      dimensions.width.canTranslate,
      plotFixed,
      panelOpen,
      windowDimensions.width,
      dimensions.width.wrapper,
    ],
  );

  useEffect(() => {
    const { height, width } = dimensions;
    dispatch(setDimensions(
      activeTab,
      height.rows,
      width.columns,
      width.pageX,
      height.pageY,
      height.heatmap,
      width.heatmap,
    ));
  }, [activeTab, dimensions, dispatch]);

  return (
    <Heatmap
      ref={ref}
      translation={translation}
      wrapperHeight={dimensions.height.wrapper}
      wrapperWidth={dimensions.width.wrapper}
    />
  );
};

export default HeatmapContainer;
