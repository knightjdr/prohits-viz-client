import { nanoid } from 'nanoid';
import round from '../../../../utils/round';

const scaleData = (points, ticks, options) => {
  const { axisLength, logBase } = options;

  const getScaler = (vertex) => {
    const max = ticks[vertex][ticks[vertex].length - 1];
    if (logBase !== 'none') {
      const logFunc = logBase === '2' ? Math.log10 : Math.log2;
      const min = ticks[vertex][0];
      const k = axisLength / (logFunc(max) - logFunc(min));
      const c = -1 * k * logFunc(min);
      return (point) => round(k * logFunc(point) + c, 2);
    }
    return (point) => round((point / max) * axisLength, 2);
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
