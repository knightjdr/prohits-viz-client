import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircHeatmap from './circheatmap';

import defineDimensions from './dimensions/define-dimensions';
import defineTranslation from '../common/dimensions/define-translation';
import useWindowDimension from '../../../hooks/window-size/use-window-dimension';
import { selectDataProperty } from '../../../state/selector/visualization/data-selector';
import { selectPlot } from '../../../state/selector/visualization/plot-selector';
import { selectStateProperty } from '../../../state/selector/general';
import { setDimensions } from '../../../state/visualization/settings/dimension-actions';

const CircHeatmapContainer = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const panelOpen = useSelector((state) => selectStateProperty(state, 'panel', 'open'));
  const plot = useSelector((state) => selectPlot(state));
  const plotFixed = useSelector((state) => selectStateProperty(state, 'display', 'plotFixed'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const { segmentOrder } = settings;

  const windowDimensions = useWindowDimension(50);

  const dimensions = useMemo(
    () => defineDimensions(
      windowDimensions.height,
      windowDimensions.width,
      segmentOrder.length,
    ),
    [segmentOrder, windowDimensions.height, windowDimensions.width],
  );

  const translation = useMemo(
    () => defineTranslation(
      dimensions.canTranslate,
      plotFixed,
      panelOpen,
      windowDimensions.width,
      dimensions.svg,
    ),
    [
      dimensions.canTranslate,
      plotFixed,
      panelOpen,
      windowDimensions.width,
      dimensions.svg,
    ],
  );

  useEffect(() => {
    dispatch(setDimensions(
      {
        canTranslate: dimensions.canTranslate,
        height: dimensions.svg,
        thickness: dimensions.thickness,
        width: dimensions.svg,
      },
    ));
  }, [dimensions, dispatch]);

  return (
    <CircHeatmap
      plot={plot}
      radius={dimensions.radius}
      ref={ref}
      svgHeight={dimensions.svg}
      svgWidth={dimensions.svg}
      translation={translation}
    />
  );
};

export default CircHeatmapContainer;
