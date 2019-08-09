import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import colorGradient from '../../../../utils/color/color-gradient';
import setEdgeSize from './edge-size';
import getPage from './page';
import Grid from './grid';
import row from './draw-row';
import setEdgeRange from './edge-range';
import setRange from '../../../../utils/set-range';
import { stateSelector, stateSelectorProp } from '../../../../state/selector/general';

const NUM_COLORS = 101;
const PAGE_BUFFER = 5;

const GridContainer = () => {
  const dimensions = useSelector(state => stateSelector(state, 'dimensions'));
  const position = useSelector(state => stateSelector(state, 'position'));
  const rows = useSelector(state => stateSelectorProp(state, 'rows', 'list'));
  const scoreType = useSelector(state => stateSelectorProp(state, 'parameters', 'scoreType'));
  const settings = useSelector(state => stateSelectorProp(state, 'settings', 'current'));

  const {
    abundanceCap,
    cellSize,
    edgeColor,
    fillColor,
    imageType,
    invertColor,
    minAbundance,
    primaryFilter,
    secondaryFilter,
  } = settings;

  const drawRow = useMemo(() => row(imageType), [imageType]);
  const edgeGradient = useMemo(() => colorGradient(edgeColor, NUM_COLORS, false), [edgeColor]);
  const edgeRange = useMemo(
    () => setEdgeRange(primaryFilter, secondaryFilter, scoreType, 0, NUM_COLORS - 1),
    [primaryFilter, secondaryFilter, scoreType],
  );
  const edgeSize = useMemo(() => setEdgeSize(cellSize), [cellSize]);
  const fillGradient = useMemo(
    () => colorGradient(fillColor, NUM_COLORS, invertColor),
    [fillColor, invertColor],
  );
  const fillRange = useMemo(
    () => setRange(minAbundance, abundanceCap, 0, NUM_COLORS - 1),
    [minAbundance, abundanceCap],
  );

  const page = useMemo(
    () => getPage(
      imageType,
      rows,
      position,
      dimensions,
      cellSize,
      edgeGradient,
      fillGradient,
      edgeRange,
      fillRange,
      PAGE_BUFFER,
    ),
    [
      imageType,
      rows,
      position,
      dimensions,
      cellSize,
      edgeGradient,
      fillGradient,
      edgeRange,
      fillRange,
    ],
  );

  return (
    <Grid
      cellSize={cellSize}
      drawRow={drawRow}
      edgeSize={edgeSize}
      offset={cellSize / 2}
      page={page}
    />
  );
};

export default GridContainer;
