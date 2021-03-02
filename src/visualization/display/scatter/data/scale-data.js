import { nanoid } from 'nanoid';
import convertToExponent from '../../../../utils/convert-to-exponent';
import round from '../../../../utils/round';

const formatTickLabel = (value) => {
  const label = round(value, 2);
  const integer = Math.trunc(label);
  if (integer.toString().length > 5) {
    return convertToExponent(label, { asNode: true, base: 10, precision: 2 });
  }
  return label;
};

const scaleData = (points, ticks, lines, options) => {
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

  const scaleLine = (line) => ({
    ...line,
    x1: scaleXValue(line.x1),
    x2: scaleXValue(line.x2),
    y1: axisLength - scaleYValue(line.y1),
    y2: axisLength - scaleYValue(line.y2),
  });

  return {
    lines: {
      fcLines: lines.fcLines.map((line) => scaleLine(line)),
      midline: scaleLine(lines.midline),
    },
    points: points.map((point) => ({
      ...point,
      x: scaleXValue(Math.max(point.x, ticks.x[0])),
      y: scaleYValue(Math.max(point.y, ticks.y[0])),
    })),
    ticks: {
      x: ticks.x.map((tick) => ({ key: nanoid(10), label: formatTickLabel(tick), x: scaleXValue(tick) })),
      y: ticks.y.map((tick) => ({ key: nanoid(10), label: formatTickLabel(tick), y: scaleYValue(tick) })),
    },
  };
};

export default scaleData;
