import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircHeatmap from './circheatmap';

import defineDimensions from './dimensions/define-dimensions';
import defineThickness from './dimensions/define-thickness';
import defineTranslation from '../common/dimensions/define-translation';
import filterReadouts from './utils/filter-readouts';
import sortReadouts from './utils/sort-readouts';
import useWindowDimension from '../../../hooks/window-size/use-window-dimension';
import { selectDataProperty } from '../../../state/selector/visualization/data-selector';
import { selectPlot } from '../../../state/selector/visualization/plot-selector';
import { selectStateProperty } from '../../../state/selector/general';
import { setDimensions } from '../../../state/visualization/settings/dimension-actions';
import { updateSetting } from '../../../state/visualization/settings/settings-actions';

const CircHeatmapContainer = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const circles = useSelector((state) => selectDataProperty(state, 'circles', 'order'));
  const panelOpen = useSelector((state) => selectStateProperty(state, 'panel', 'open'));
  const plot = useSelector((state) => selectPlot(state));
  const plotFixed = useSelector((state) => selectStateProperty(state, 'display', 'plotFixed'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const { maxReadouts, sortByKnown, thickness: desiredThickness } = settings;

  const windowDimensions = useWindowDimension(50);

  const dimensions = useMemo(
    () => defineDimensions(
      windowDimensions.height,
      windowDimensions.width,
    ),
    [windowDimensions.height, windowDimensions.width],
  );

  const thickness = useMemo(
    () => defineThickness(circles.length, dimensions.svg, desiredThickness),
    [circles.length, dimensions.svg, desiredThickness],
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

  const filtered = useMemo(
    () => filterReadouts(plot.readouts, circles),
    [plot.readouts, circles],
  );

  const sortedReadouts = useMemo(
    () => sortReadouts(filtered, { byKnown: sortByKnown, maxReadouts, sortBy: circles[0]?.attribute }),
    [circles, filtered, maxReadouts, sortByKnown],
  );

  useEffect(() => {
    dispatch(setDimensions(
      {
        canTranslate: dimensions.canTranslate,
        height: dimensions.svg,
        width: dimensions.svg,
      },
    ));
  }, [dimensions, dispatch]);

  useEffect(() => {
    if (thickness !== desiredThickness) {
      dispatch(updateSetting('thickness', thickness));
    }
  }, [desiredThickness, thickness]);

  return (
    <CircHeatmap
      dimensions={dimensions}
      plot={{
        ...plot,
        readouts: sortedReadouts,
      }}
      ref={ref}
      translation={translation}
    />
  );
};

export default CircHeatmapContainer;
