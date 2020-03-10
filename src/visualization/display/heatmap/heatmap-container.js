import React, { useEffect, useMemo, useRef } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import Heatmap from './heatmap';

import defineDimensions from './dimensions/define-dimensions';
import defineTranslation from './dimensions/define-translation';
import usePlotScroll from './dimensions/use-plot-scroll';
import useShortCuts from './shortcuts/use-shortcuts';
import useWindowDimension from '../../../hooks/window-size/use-window-dimension';
import { setDimensions } from '../../../state/visualization/settings/dimension-actions';
import { selectDataProperty } from '../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../state/selector/general';
import { updatePosition } from '../../../state/visualization/settings/position-actions';

const HeatmapContainer = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const activeSnapshotTab = useSelector(state => selectStateProperty(state, 'tabs', 'activeSnapshot'));
  const columns = useSelector(state => selectDataProperty(state, 'columns', 'order'));
  const panelOpen = useSelector(state => selectStateProperty(state, 'panel', 'open'));
  const plotFixed = useSelector(state => selectDataProperty(state, 'display', 'plotFixed'));
  const rowOrder = useSelector(state => selectDataProperty(state, 'rows', 'order'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const windowDimensions = useWindowDimension(50);
  usePlotScroll(ref, 50);
  useShortCuts();

  const { cellSize } = settings;
  const cellHeight = rowOrder.length;
  const cellWidth = columns.length;

  const dimensions = useMemo(
    () => defineDimensions(
      cellSize,
      cellHeight,
      cellWidth,
      windowDimensions.height,
      windowDimensions.width,
      activeSnapshotTab,
    ),
    [activeSnapshotTab, cellSize, cellHeight, cellWidth, windowDimensions.height, windowDimensions.width],
  );

  const translation = useMemo(
    () => defineTranslation(
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
    batch(() => {
      dispatch(setDimensions(
        {
          canTranslate: width.canTranslate,
          columns: width.columns,
          height: height.heatmap,
          pageX: width.pageX,
          pageY: height.pageY,
          rows: height.rows,
          width: width.heatmap,
          wrapperHeight: dimensions.height.wrapper,
          wrapperWidth: dimensions.width.wrapper,
        },
      ));
      dispatch(updatePosition(0, 0));
    });
  }, [dimensions, dispatch]);

  return (
    <Heatmap
      ref={ref}
      showHorizontalArrows={dimensions.width.arrowsX}
      showVerticalArrows={dimensions.height.arrowsY}
      translation={translation}
      wrapperHeight={dimensions.height.wrapper}
      wrapperWidth={dimensions.width.wrapper}
    />
  );
};

export default HeatmapContainer;
