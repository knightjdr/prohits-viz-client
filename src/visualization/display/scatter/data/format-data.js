import { defineFcLines, defineMidline } from './define-lines';
import defineTicks from './define-ticks';
import removeDuplicates from '../../../../utils/remove-duplicates';
import scaleData from './scale-data';
import sort from '../../../../utils/sort';

const formatData = (data, options) => {
  const {
    axisLength,
    equalScaleAxes,
    fcLines,
    logBase,
    scale,
    showFcLines,
    showMidline,
  } = options;

  const ticks = {
    x: defineTicks(data, { logBase, scale, vertex: 'x' }),
    y: defineTicks(data, { logBase, scale, vertex: 'y' }),
  };

  if (equalScaleAxes) {
    const tickList = removeDuplicates([...ticks.x, ...ticks.y]);
    tickList.sort(sort.numeric);
    ticks.x = tickList;
    ticks.y = tickList;
  }

  const lines = {
    fcLines: showFcLines ? defineFcLines(fcLines, ticks) : [],
    midline: showMidline ? defineMidline(ticks) : {},
  };

  const scaleOptions = { axisLength, logBase };
  const scaledData = scaleData(data, ticks, lines, scaleOptions);

  return scaledData;
};

export default formatData;
