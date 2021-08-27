import React, {
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import Canvas from './canvas';

import calculatePageDimensions from './calculate-page-dimensions';
import calculateEdgeWidth from './calculate-edge-width';
import createCanvas from './create-canvas';
import defineFillLimits from '../../../../utils/define-fill-limits';
import heatmapConfig from '../config';
import initializeColorGradient from '../../../../utils/color/initialize-color-gradient';
import partialEdgeRange from './set-edge-range-partial';
import partialSetRange from '../../../../utils/set-range-partial';
import { resetScroll } from '../../../../state/visualization/settings/dimension-actions';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { selectState, selectStateProperty } from '../../../../state/selector/general';
import { updatePosition } from '../../../../state/visualization/settings/position-actions';

const CanvasContainer = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const columnOrder = useSelector((state) => selectDataProperty(state, 'columns', 'order'));
  const dimensions = useSelector((state) => selectData(state, 'dimensions'));
  const position = useSelector((state) => selectData(state, 'position'));
  const rowDB = useSelector((state) => selectState(state, 'rowDB'));
  const rowOrder = useSelector((state) => selectDataProperty(state, 'rows', 'order'));
  const scoreType = useSelector((state) => selectStateProperty(state, 'parameters', 'scoreType'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));

  const {
    abundanceCap,
    abundanceType,
    cellSize,
    edgeColor,
    fillColor,
    imageType,
    invertColor,
    minAbundance,
    primaryFilter,
    resetRatios,
    secondaryFilter,
  } = settings;

  const { numColors } = heatmapConfig;

  const convertToEdgeRange = useMemo(
    () => partialEdgeRange(primaryFilter, secondaryFilter, scoreType, 0, numColors - 1),
    [numColors, primaryFilter, secondaryFilter, scoreType],
  );

  const fillLimits = useMemo(
    () => defineFillLimits(abundanceType, minAbundance, abundanceCap),
    [abundanceCap, abundanceType, minAbundance],
  );

  const convertToFillRange = useMemo(
    () => partialSetRange(fillLimits.min, fillLimits.max, 0, numColors - 1),
    [fillLimits.max, fillLimits.min, numColors],
  );

  const edgeGradient = useMemo(
    () => initializeColorGradient(edgeColor, numColors, false),
    [edgeColor, numColors],
  );

  const edgeWidth = useMemo(() => calculateEdgeWidth(cellSize), [cellSize]);

  const fillGradient = useMemo(
    () => initializeColorGradient(fillColor, numColors, invertColor),
    [fillColor, invertColor, numColors],
  );

  const pageDimensions = useMemo(
    () => calculatePageDimensions(dimensions, position, columnOrder, rowOrder, cellSize),
    [cellSize, columnOrder, dimensions, position, rowOrder],
  );

  const pageSettings = {
    imageType,
    pageDimensions,
    rowDB,
    columnOrder,
    rowOrder,
    cellSize,
    edgeWidth,
    edgeGradient,
    fillGradient,
    convertToEdgeRange,
    convertToFillRange,
    resetRatios,
  };

  useEffect(() => {
    if (dimensions.height > 0 && dimensions.width > 0) {
      createCanvas(ref.current, pageSettings);
    }
  }, [dimensions, pageSettings]);

  useEffect(() => {
    if (pageDimensions.resetPosition) {
      batch(() => {
        dispatch(resetScroll());
        dispatch(updatePosition(0, 0));
      });
    }
  }, [dispatch, pageDimensions]);

  return (
    <Canvas
      pageDimensions={pageDimensions}
      ref={ref}
    />
  );
};

export default CanvasContainer;
