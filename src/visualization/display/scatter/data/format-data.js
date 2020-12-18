import defineTicks from './define-ticks';
import scaleData from './scale-data';

const formatData = (data, options) => {
  const { axisLength, logTransform, scale } = options;

  const ticks = {
    x: defineTicks(data, { logTransform, scale, vertex: 'x' }),
    y: defineTicks(data, { logTransform, scale, vertex: 'y' }),
  };

  const scaleOptions = { axisLength, logTransform };
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
