import defineTicks from './define-ticks';
import removeDuplicates from '../../../../utils/remove-duplicates';
import scaleData from './scale-data';
import sort from '../../../../utils/sort';

const formatData = (data, options) => {
  const {
    axisLength,
    logBase,
    scale,
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

  return {
    points: scaledData.points,
    ticks: {
      x: scaledData.ticks.x,
      y: scaledData.ticks.y,
    },
  };
};

export default formatData;
