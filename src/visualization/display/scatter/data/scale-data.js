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
  const { axisLength, logBase, logX, logY } = options;

  const getScaler = (vertex, log, logAxis) => {
    const first = ticks[vertex][0];
    const last = ticks[vertex][ticks[vertex].length - 1];
    if (log !== 'none' && logAxis) {
      const numPositiveTicks = ticks[vertex].reduce((accum, tick) => (tick > 0 ? accum + 1 : accum), 0);
      const negAxisLength = axisLength * ((ticks[vertex].length - numPositiveTicks) / ticks[vertex].length);
      const posAxisLength = axisLength * (numPositiveTicks / ticks[vertex].length);
      const negativeExtremes = {
        max: ticks[vertex].reduce((accum, tick) => {
          const absoluteTick = Math.abs(tick);
          return tick < 0 && absoluteTick > accum ? absoluteTick : accum;
        }, 0),
        min: ticks[vertex].reduce((accum, tick) => {
          const absoluteTick = Math.abs(tick);
          return tick < 0 && absoluteTick < accum ? absoluteTick : accum;
        }, Infinity),
      };
      const positiveExtremes = {
        max: ticks[vertex].reduce((accum, tick) => (tick > accum ? tick : accum), 0),
        min: ticks[vertex].reduce((accum, tick) => (tick > 0 && tick < accum ? tick : accum), Infinity),
      };

      const logFunc = logBase === '2' ? Math.log10 : Math.log2;
      const kNeg = negAxisLength > 0
        ? negAxisLength / (logFunc(negativeExtremes.max) - logFunc(negativeExtremes.min))
        : 0;
      const kPos = posAxisLength > 0
        ? posAxisLength / (logFunc(positiveExtremes.max) - logFunc(positiveExtremes.min))
        : 0;
      const cNeg = -1 * kNeg * logFunc(negativeExtremes.min);
      const cPos = -1 * kPos * logFunc(positiveExtremes.min);
      return (point) => (
        point > 0
          ? round(kPos * logFunc(point) + cPos + negAxisLength, 2)
          : round(negAxisLength - (kNeg * logFunc(Math.abs(point)) + cNeg), 2)
      );
    }
    return (point) => round(((point - first) / (last - first)) * axisLength, 2);
  };

  const scaleXValue = getScaler('x', logBase, logX);
  const scaleYValue = getScaler('y', logBase, logY);

  const scaleLine = (line) => ({
    ...line,
    x1: scaleXValue(line.x1),
    x2: scaleXValue(line.x2),
    y1: round(axisLength - scaleYValue(line.y1), 2),
    y2: round(axisLength - scaleYValue(line.y2), 2),
  });

  return {
    lines: {
      fcLines: lines.fcLines.map((line) => scaleLine(line)),
      midline: lines.midline && scaleLine(lines.midline),
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
