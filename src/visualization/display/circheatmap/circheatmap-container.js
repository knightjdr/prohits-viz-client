import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircHeatmap from './circheatmap';

import defineDimensions from './dimensions/define-dimensions';
import defineThickness from './dimensions/define-thickness';
import defineTranslation from '../common/dimensions/define-translation';
import useShortCuts from './hooks/use-shortcuts';
import useWindowDimension from '../../../hooks/window-size/use-window-dimension';
import { selectDataProperty } from '../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../state/selector/general';
import { setDimensions } from '../../../state/visualization/settings/dimension-actions';
import { updateSetting } from '../../../state/visualization/settings/settings-actions';

const CircHeatmapContainer = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const circles = useSelector((state) => selectDataProperty(state, 'circles', 'order'));
  const panelOpen = useSelector((state) => selectStateProperty(state, 'panel', 'open'));
  const plotFixed = useSelector((state) => selectDataProperty(state, 'display', 'plotFixed'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const { thickness: desiredThickness } = settings;

  const windowDimensions = useWindowDimension(50);
  useShortCuts();

  const dimensions = useMemo(
    () => defineDimensions(
      windowDimensions.height,
      windowDimensions.width,
    ),
    [windowDimensions.height, windowDimensions.width],
  );

  const thickness = useMemo(
    () => defineThickness(circles.length, dimensions.svgHeight, desiredThickness),
    [circles.length, dimensions.svgHeight, desiredThickness],
  );

  const translation = useMemo(
    () => defineTranslation(
      dimensions.canTranslate,
      plotFixed,
      panelOpen,
      windowDimensions.width,
      dimensions.svgWidth,
    ),
    [
      dimensions.canTranslate,
      plotFixed,
      panelOpen,
      windowDimensions.width,
      dimensions.svgWidth,
    ],
  );

  useEffect(() => {
    dispatch(setDimensions(dimensions));
  }, [dimensions, dispatch]);

  useEffect(() => {
    if (thickness !== desiredThickness) {
      dispatch(updateSetting('thickness', thickness));
    }
  }, [desiredThickness, thickness]);

  return (
    <CircHeatmap
      dimensions={dimensions}
      ref={ref}
      translation={translation}
    />
  );
};

export default CircHeatmapContainer;
