import { nanoid } from 'nanoid';
import round from '../../../../utils/round';

const scaleData = (points, ticks, options) => {
  const { axisLength, logTransform } = options;

  const getScaler = (vertex) => {
    const max = ticks[vertex][ticks[vertex].length - 1];
    if (logTransform) {
      const min = ticks[vertex][0];
      const k = axisLength / (Math.log10(max) - Math.log10(min));
      const c = -1 * k * Math.log10(min);
      return (point) => k * Math.log10(point) + c;
    }
    return (point) => (point / max) * axisLength;
  };

  const scaleXValue = getScaler('x');
  const scaleYValue = getScaler('y');

  return {
    points: points.map((point) => ({
      ...point,
      x: scaleXValue(Math.max(point.x, ticks.x[0])),
      y: scaleYValue(Math.max(point.y, ticks.y[0])),
    })),
    ticks: {
      x: ticks.x.map((tick) => ({ key: nanoid(10), label: round(tick, 2), x: scaleXValue(tick) })),
      y: ticks.y.map((tick) => ({ key: nanoid(10), label: round(tick, 2), y: scaleYValue(tick) })),
    },
  };
};

export default scaleData;
