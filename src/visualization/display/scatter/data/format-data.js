import defineAxisBoundaries from './define-axis-boundaries';
import defineTicks from './define-ticks';
import scaleData from './scale-data';
import { defineAxes, defineFcLines, defineMidline } from './define-lines';

const formatData = (data, options) => {
  const {
    axisLength,
    equalScaleAxes,
    fcLines,
    logBase,
    logX,
    logY,
    scale,
    showFcLines,
    showMidline,
    xTicks,
    yTicks,
  } = options;

  const axisBoundaries = defineAxisBoundaries(
    data,
    {
      equalScaleAxes,
      logX: logX ? logBase : 'none',
      logY: logY ? logBase : 'none',
    },
  );

  const ticks = {
    x: defineTicks(
      axisBoundaries.x,
      {
        logAxis: logX ? logBase : 'none',
        scale,
        userTicks: xTicks,
      },
    ),
    y: defineTicks(
      axisBoundaries.y,
      {
        logAxis: logY ? logBase : 'none',
        scale,
        userTicks: yTicks,
      },
    ),
  };

  const lines = {
    axes: defineAxes(ticks),
    fcLines: showFcLines ? defineFcLines(fcLines, ticks) : [],
    midline: showMidline ? defineMidline(ticks) : {},
  };

  const scaleOptions = { axisLength, logBase, logX, logY };
  const scaledData = scaleData(data, ticks, lines, scaleOptions);

  return scaledData;
};

export default formatData;
