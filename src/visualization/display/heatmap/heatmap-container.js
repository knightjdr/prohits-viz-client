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
import { setDimensions, updateDimension } from '../../../state/visualization/settings/dimension-actions';
import { selectDataProperty } from '../../../state/selector/visualization/data-selector';
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

  const windowDimensions = useWindowDimension(50);
  useShortCuts();

  const { cellSize } = settings;
  const noCols = columns.length;
  const noRows = rowOrder.length;

  const updateScroll = useCallback(
    (dimension, value) => {
      const newY = Math.round(value / cellSize);
      dispatch(updateDimension(dimension, value));
      debounce(
        dispatch(updatePosition(0, newY)),
        50,
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
          wrapperHeight: height.wrapper,
          wrapperWidth: width.wrapper,
        },
      ));
      dispatch(updatePosition(0, 0));
    });
  }, [dimensions, dispatch]);

  useEffect(() => {
    const updateScrollPosition = () => {
      updateScroll('scrollTop', scrollRef.current.scrollTop);
    };
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', updateScrollPosition);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', updateScrollPosition);
      }
    };
  }, [scrollRef.current]);

  return (
    <Heatmap
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
