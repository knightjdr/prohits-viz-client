import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import Grid from './grid';

import calculateEdgeWidth from './calculate-edge-width';
import heatmapConfig from '../config';
import initializeColorGradient from '../../../../utils/color/initialize-color-gradient';
import partialEdgeRange from './set-edge-range-partial';
import partialSetRange from '../../../../utils/set-range-partial';
import subsetPage from './subset-page';
import useTranslation from '../translation/use-translation';
import { selectData, selectDataProperty } from '../../../../state/selector/visualization/data-selector';
import { selectState, selectStateProperty } from '../../../../state/selector/general';

const GridContainer = () => {
  const [page, setPage] = useState(null);

  const columnOrder = useSelector(state => selectDataProperty(state, 'columns', 'order'));
  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const position = useSelector(state => selectData(state, 'position'));
  const rowDB = useSelector(state => selectState(state, 'rowDB'));
  const rowOrder = useSelector(state => selectDataProperty(state, 'rows', 'order'));
  const scoreType = useSelector(state => selectStateProperty(state, 'parameters', 'scoreType'));
  const settings = useSelector(state => selectDataProperty(state, 'settings', 'current'));

  const clipPathID = 'gridClipPath';
  const translation = useTranslation(clipPathID);

  const {
    abundanceCap,
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
  const convertToFillRange = useMemo(
    () => partialSetRange(minAbundance, abundanceCap, 0, numColors - 1),
    [abundanceCap, minAbundance, numColors],
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
  useEffect(() => {
    if (dimensions.height > 0 && dimensions.width > 0) {
      setPage(subsetPage(
        imageType,
        rowDB,
        columnOrder,
        rowOrder,
        position,
        dimensions,
        cellSize,
        edgeWidth,
        edgeGradient,
        fillGradient,
        convertToEdgeRange,
        convertToFillRange,
        resetRatios,
      ));
    }
  }, [
    cellSize,
    columnOrder,
    dimensions,
    edgeGradient,
    convertToEdgeRange,
    edgeWidth,
    fillGradient,
    convertToFillRange,
    imageType,
    position,
    rowDB,
    rowOrder,
    resetRatios,
  ]);

  return (
    <Grid
      clipPath={translation.clipPath}
      clipPathID={clipPathID}
      page={page}
      translation={translation.translation}
    />
  );
};

export default GridContainer;
