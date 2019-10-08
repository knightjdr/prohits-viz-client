import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import clipPath from './clip-path';
import colorGradient from '../../../../utils/color/color-gradient';
import heatmapConfig from '../config';
import setEdgeSize from './edge-size';
import getPage from './page';
import Grid from './grid';
import setEdgeRange from './edge-range';
import setRange from '../../../../utils/set-range';
import translation from './translation';
import { selectRows } from '../../../../state/selector/visualization/row-selector';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../../state/selector/general';

const GridContainer = () => {
  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const [page, setPage] = useState(null);
  const position = useSelector(state => selectData(state, 'position'));
  const rows = useSelector(state => selectRows(state));
  const scoreType = useSelector(state => selectStateProperty(state, 'parameters', 'scoreType'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

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

  const { numColors } = heatmapConfig;

  const gridClipPath = useMemo(
    () => clipPath(
      cellSize,
      position.x,
      position.y,
      dimensions.height,
      dimensions.width,
    ),
    [cellSize, position.x, position.y, dimensions.height, dimensions.width],
  );
  const edgeGradient = useMemo(
    () => colorGradient(edgeColor, numColors, false),
    [edgeColor, numColors],
  );
  const edgeRange = useMemo(
    () => setEdgeRange(primaryFilter, secondaryFilter, scoreType, 0, numColors - 1),
    [numColors, primaryFilter, secondaryFilter, scoreType],
  );
  const edgeSize = useMemo(() => setEdgeSize(cellSize), [cellSize]);
  const fillGradient = useMemo(
    () => colorGradient(fillColor, numColors, invertColor),
    [fillColor, invertColor, numColors],
  );
  const fillRange = useMemo(
    () => setRange(minAbundance, abundanceCap, 0, numColors - 1),
    [abundanceCap, minAbundance, numColors],
  );
  const gridTranslation = useMemo(
    () => translation(cellSize, position.x, position.y),
    [cellSize, position.x, position.y],
  );

  useEffect(() => {
    if (dimensions.height > 0 && dimensions.width > 0) {
      setPage(getPage(
        imageType,
        rows,
        position,
        dimensions,
        cellSize,
        edgeSize,
        edgeGradient,
        fillGradient,
        edgeRange,
        fillRange,
      ));
    }
  }, [
    cellSize,
    dimensions,
    edgeGradient,
    edgeRange,
    edgeSize,
    fillGradient,
    fillRange,
    imageType,
    position,
    rows,
  ]);

  return (
    <Grid
      clipPath={gridClipPath}
      gridTranslation={gridTranslation}
      page={page}
    />
  );
};

export default GridContainer;
