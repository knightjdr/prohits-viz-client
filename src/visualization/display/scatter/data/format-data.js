import defineMidline from './define-midline';
import defineTicks from './define-ticks';
import removeDuplicates from '../../../../utils/remove-duplicates';
import scaleData from './scale-data';
import sort from '../../../../utils/sort';

const formatData = (data, options) => {
  const {
    axisLength,
    logBase,
    scale,
    showMidline,
    equalScaleAxes,
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

  const scaleOptions = { axisLength, logBase };
  const scaledData = scaleData(data, ticks, scaleOptions);

  const midline = showMidline ? defineMidline(scaledData.ticks, axisLength) : null;

  return {
    ...scaledData,
    midline,
  };
};

export default formatData;
