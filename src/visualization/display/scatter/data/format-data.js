import { defineFcLines, defineMidline } from './define-lines';
import defineTicks from './define-ticks';
import mergeTicks from './merge-ticks';
import scaleData from './scale-data';

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
  } = options;

  const ticks = {
    x: defineTicks(
      data,
      {
        logAxis: logX,
        logBase,
        scale,
        vertex: 'x',
      },
    ),
    y: defineTicks(
      data,
      {
        logAxis: logY,
        logBase,
        scale,
        vertex: 'y',
      },
    ),
  };

  if (equalScaleAxes && (logX === logY)) {
    const tickList = mergeTicks(ticks, logBase);
    ticks.x = tickList;
    ticks.y = tickList;
  }

  const lines = {
    fcLines: showFcLines ? defineFcLines(fcLines, ticks) : [],
    midline: showMidline ? defineMidline(ticks) : {},
  };

  const scaleOptions = { axisLength, logBase, logX, logY };
  const scaledData = scaleData(data, ticks, lines, scaleOptions);

  return scaledData;
};

export default formatData;
