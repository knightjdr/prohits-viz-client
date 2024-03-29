import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Scatter from './scatter';

import defineDimensions from './dimensions/define-dimensions';
import defineTranslation from '../common/dimensions/define-translation';
import formatData from './data/format-data';
import useShortCuts from './hooks/use-shortcuts';
import useWindowDimension from '../../../hooks/window-size/use-window-dimension';
import { selectData, selectDataProperty } from '../../../state/selector/visualization/data-selector';
import { selectStateProperty } from '../../../state/selector/general';
import { setDimensions } from '../../../state/visualization/settings/dimension-actions';

const ScatterContainer = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const panelOpen = useSelector((state) => selectStateProperty(state, 'panel', 'open'));
  const points = useSelector((state) => selectDataProperty(state, 'points', 'current'));
  const { plotFixed, transform } = useSelector((state) => selectData(state, 'display'));
  const { fcLines, showFcLines, showMidline } = useSelector((state) => selectData(state, 'lines'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const {
    equalScaleAxes,
    logBase,
    logX,
    logY,
    xTicks,
    yTicks,
  } = settings;

  const windowDimensions = useWindowDimension(50);
  useShortCuts();

  const dimensions = useMemo(
    () => defineDimensions(
      windowDimensions.height,
      windowDimensions.width,
    ),
    [windowDimensions.height, windowDimensions.width],
  );

  const translation = useMemo(
    () => defineTranslation(
      dimensions.canTranslate,
      plotFixed,
      panelOpen,
      windowDimensions.width,
      dimensions.wrapper,
    ),
    [
      dimensions.canTranslate,
      plotFixed,
      panelOpen,
      windowDimensions.width,
      dimensions.wrapper,
    ],
  );

  const data = useMemo(
    () => {
      const options = {
        axisLength: dimensions.plot,
        equalScaleAxes,
        fcLines,
        logBase,
        logX,
        logY,
        scale: transform.scale,
        showFcLines,
        showMidline,
        xTicks,
        yTicks,
      };
      return formatData(points, options);
    },
    [
      dimensions.height,
      fcLines,
      equalScaleAxes,
      logBase,
      logX,
      logY,
      points,
      showFcLines,
      showMidline,
      transform.scale,
      windowDimensions,
      xTicks,
      yTicks,
    ],
  );

  useEffect(() => {
    dispatch(setDimensions(
      {
        canTranslate: dimensions.canTranslate,
        height: dimensions.plot,
        width: dimensions.plot,
        wrapperHeight: dimensions.wrapper,
        wrapperWidth: dimensions.wrapper,
      },
    ));
  }, [dimensions, dispatch]);

  return (
    <Scatter
      lines={data.lines}
      points={data.points}
      ref={ref}
      ticks={data.ticks}
      translation={translation}
      wrapperHeight={dimensions.wrapper}
      wrapperWidth={dimensions.wrapper}
    />
  );
};

export default ScatterContainer;
