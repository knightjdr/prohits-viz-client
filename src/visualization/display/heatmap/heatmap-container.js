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
  const dimensions = useSelector((state) => selectData(state, 'dimensions'));
  const panelOpen = useSelector((state) => selectStateProperty(state, 'panel', 'open'));
  const plotFixed = useSelector((state) => selectDataProperty(state, 'display', 'plotFixed'));
  const rowOrder = useSelector((state) => selectDataProperty(state, 'rows', 'order'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

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
    [cellSize, dispatch],
  );

  const newDimensions = useMemo(
    () => defineDimensions({
      cellSize,
      noCols,
      noRows,
      previousDimensions: dimensions,
      windowHeight: windowDimensions.height,
      windowWidth: windowDimensions.width,
    }),
    [activeSnapshotTab, cellSize, noRows, noCols, windowDimensions.height, windowDimensions.width],
  );

  const translation = useMemo(
    () => defineTranslation(
      newDimensions.width.canTranslate,
      plotFixed,
      panelOpen,
      windowDimensions.width,
      newDimensions.width.wrapper,
    ),
    [
      newDimensions.width.canTranslate,
      plotFixed,
      panelOpen,
      windowDimensions.width,
      newDimensions.width.wrapper,
    ],
  );

  useEffect(() => {
    const { height, width } = newDimensions;
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
  }, [newDimensions, dispatch]);

  const handleScroll = (e) => {
    const el = e.currentTarget;
    updateScroll(el.scrollLeft, el.scrollTop);
  };

  useEffect(() => {
    const { scrollLeft, scrollTop, scrollUpdate } = dimensions;
    if (scrollRef.current && scrollUpdate) {
      scrollRef.current.scrollLeft = scrollLeft;
      scrollRef.current.scrollTop = scrollTop;
      dispatch(updateDimension('scrollUpdate', false));
    }
  }, [dimensions.scrollLeft, dimensions.scrollTop, dimensions.scrollUpdate]);

  return (
    <Heatmap
      handleScroll={handleScroll}
      page={{
        height: newDimensions.height.heatmap,
        width: newDimensions.width.heatmap,
      }}
      ref={{
        pageRef,
        scrollRef,
      }}
      showHorizontalArrows={newDimensions.width.arrowsX}
      showVerticalArrows={newDimensions.height.arrowsY}
      scroll={{
        containerHeight: newDimensions.height.scrollContainer,
        containerWidth: newDimensions.width.scrollContainer,
        contentHeight: newDimensions.height.scrollContent,
        contentWidth: newDimensions.width.scrollContent,
      }}
      translation={translation}
      wrapper={{
        height: newDimensions.height.wrapper,
        width: newDimensions.width.wrapper,
      }}
    />
  );
};

export default HeatmapContainer;
