import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import Heatmap from './heatmap';

import debounce from '../../../utils/debounce';
import defineDimensions from './dimensions/define-dimensions';
import defineTranslation from '../common/dimensions/define-translation';
import useShortCuts from './hooks/use-shortcuts';
import useWindowDimension from '../../../hooks/window-size/use-window-dimension';
import {
  setDimensions,
  updateDimension,
  updateDimensions,
} from '../../../state/visualization/settings/dimension-actions';
import { selectData, selectDataProperty } from '../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../state/selector/general';
import { updatePosition } from '../../../state/visualization/settings/position-actions';

const HeatmapContainer = () => {
  const dispatch = useDispatch();
  const pageRef = useRef();
  const scrollRef = useRef();

  const activeSnapshotTab = useSelector((state) => selectStateProperty(state, 'tabs', 'activeSnapshot'));
  const columns = useSelector((state) => selectDataProperty(state, 'columns', 'order'));
  const panelOpen = useSelector((state) => selectStateProperty(state, 'panel', 'open'));
  const plotFixed = useSelector((state) => selectDataProperty(state, 'display', 'plotFixed'));
  const rowOrder = useSelector((state) => selectDataProperty(state, 'rows', 'order'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const { scrollLeft, scrollTop, scrollUpdate } = useSelector((state) => selectData(state, 'dimensions'));

  const windowDimensions = useWindowDimension(50);
  useShortCuts();

  const { cellSize } = settings;
  const noCols = columns.length;
  const noRows = rowOrder.length;

  const updateScroll = useCallback(
    (newScrollLeft, newScrollTop) => {
      const newX = Math.round(newScrollLeft / cellSize);
      const newY = Math.round(newScrollTop / cellSize);
      debounce(
        batch(() => {
          dispatch(updateDimensions({
            scrollLeft: newScrollLeft,
            scrollTop: newScrollTop,
          }));
          dispatch(updatePosition(newX, newY));
        }),
        20,
      );
    },
    [dispatch],
  );

  const dimensions = useMemo(
    () => defineDimensions(
      cellSize,
      noRows,
      noCols,
      windowDimensions.height,
      windowDimensions.width,
      activeSnapshotTab,
    ),
    [activeSnapshotTab, cellSize, noRows, noCols, windowDimensions.height, windowDimensions.width],
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
          scrollContainerHeight: height.scrollContainer,
          scrollContainerWidth: width.scrollContainer,
          scrollContentHeight: height.scrollContent,
          scrollContentWidth: width.scrollContent,
          scrollLeft: width.scrollLeft,
          scrollTop: height.scrollTop,
          scrollUpdate: 'true',
          wrapperHeight: height.wrapper,
          wrapperWidth: width.wrapper,
        },
      ));
      dispatch(updatePosition(0, 0));
    });
  }, [dimensions, dispatch]);

  const handleScroll = (e) => {
    const el = e.currentTarget;
    updateScroll(el.scrollLeft, el.scrollTop);
  };

  useEffect(() => {
    if (scrollRef.current && scrollUpdate) {
      scrollRef.current.scrollLeft = scrollLeft;
      scrollRef.current.scrollTop = scrollTop;
      dispatch(updateDimension('scrollUpdate', false));
    }
  }, [scrollUpdate]);

  return (
    <Heatmap
      handleScroll={handleScroll}
      page={{
        height: dimensions.height.heatmap,
        width: dimensions.width.heatmap,
      }}
      ref={{
        pageRef,
        scrollRef,
      }}
      showHorizontalArrows={dimensions.width.arrowsX}
      showVerticalArrows={dimensions.height.arrowsY}
      scroll={{
        containerHeight: dimensions.height.scrollContainer,
        containerWidth: dimensions.width.scrollContainer,
        contentHeight: dimensions.height.scrollContent,
        contentWidth: dimensions.width.scrollContent,
      }}
      translation={translation}
      wrapper={{
        height: dimensions.height.wrapper,
        width: dimensions.width.wrapper,
      }}
    />
  );
};

export default HeatmapContainer;
