import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Scatter from './scatter';

import defineDimensions from './dimensions/define-dimensions';
import defineTranslation from '../common/dimensions/define-translation';
import formatData from './data/format-data';
import useShortCuts from './hooks/use-shortcuts';
import useWindowDimension from '../../../hooks/window-size/use-window-dimension';
import { selectData, selectDataProperty } from '../../../state/selector/visualization/data-selector';
import { selectPlot } from '../../../state/selector/visualization/plot-selector';
import { selectStateProperty } from '../../../state/selector/general';
import { setDimensions } from '../../../state/visualization/settings/dimension-actions';

const ScatterContainer = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const panelOpen = useSelector((state) => selectStateProperty(state, 'panel', 'open'));
  const plot = useSelector((state) => selectPlot(state));
  const { plotFixed, transform } = useSelector((state) => selectData(state, 'display'));
  const settings = useSelector((state) => selectDataProperty(state, 'settings', 'current'));
  const {
    equalScaleAxes,
    logBase,
    xFilter,
    yFilter,
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

  const filtered = useMemo(
    () => plot.points.filter((point) => point.x >= xFilter && point.y >= yFilter),
    [plot.points, xFilter, yFilter],
  );

  const data = useMemo(
    () => {
      const options = {
        axisLength: dimensions.plot,
        logBase,
        scale: transform.scale,
        equalScaleAxes,
      };
      return formatData(filtered, options);
    },
    [dimensions.height, logBase, filtered, equalScaleAxes, transform.scale],
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
