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
      /**
       * Handling positive and negative log axes requires first defining the proportion of
       * the axis length in pixels to devote to each based on the tick marks. However, there
       * will always be a void area around the origin between the adjacent ticks marks that
       * represent the lowest values that can be taken. This void needs to be taken into
       * account when defining the negative and positive lengths for the axes.
       *
       * For negative points, these are treated as positive and then the negative axis length
       * is subtracted to get their real value.
       *
       * For positive values, the negative axis length and void need to be added to all values
       * to account for the negative axis region.
       *
       * Any values falling in the void area are linear scaled.
       */
      const numPositiveTicks = ticks[vertex].reduce((accum, tick) => (tick > 0 ? accum + 1 : accum), 0);
      const numNegativeTicks = ticks[vertex].length - numPositiveTicks;
      const segments = ticks[vertex].length - 1;
      const negAxisLength = numNegativeTicks > 0 ? (axisLength * ((numNegativeTicks - 1) / segments)) : 0;
      const posAxisLength = numPositiveTicks > 0 ? (axisLength * ((numPositiveTicks - 1) / segments)) : 0;
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
      const voidSpace = numPositiveTicks > 0 && numNegativeTicks > 0
        ? axisLength / (ticks[vertex].length - 1)
        : 0;

      const logFunc = logBase === '2' ? Math.log10 : Math.log2;
      const kNeg = negAxisLength > 0
        ? negAxisLength / (logFunc(negativeExtremes.max) - logFunc(negativeExtremes.min))
        : 0;
      const kPos = posAxisLength > 0
        ? posAxisLength / (logFunc(positiveExtremes.max) - logFunc(positiveExtremes.min))
        : 0;
      const cNeg = -1 * kNeg * logFunc(negativeExtremes.min);
      const cPos = -1 * kPos * logFunc(positiveExtremes.min);

      const scaleLinear = (point) => round(
        negAxisLength + (((point + negativeExtremes.min) / (positiveExtremes.min + negativeExtremes.min)) * voidSpace),
        2,
      );

      return (point) => {
        if (point === 0) {
          return negAxisLength + (voidSpace / 2);
        }
        if (point > 0) {
          return point < positiveExtremes.min && voidSpace > 0
            ? scaleLinear(point)
            : round(kPos * logFunc(point) + cPos + negAxisLength + voidSpace, 2);
        }
        return point > -negativeExtremes.min && voidSpace > 0
          ? scaleLinear(point)
          : round(negAxisLength - (kNeg * logFunc(Math.abs(point)) + cNeg), 2);
      };
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
      axes: {
        x: scaleLine(lines.axes.x),
        y: scaleLine(lines.axes.y),
      },
      fcLines: lines.fcLines.map((line) => scaleLine(line)),
      midline: lines.midline && scaleLine(lines.midline),
    },
    points: points.map((point) => ({
      ...point,
      x: scaleXValue(point.x),
      y: scaleYValue(point.y),
    })),
    ticks: {
      x: ticks.x.map((tick) => ({ key: nanoid(10), label: formatTickLabel(tick), x: scaleXValue(tick) })),
      y: ticks.y.map((tick) => ({ key: nanoid(10), label: formatTickLabel(tick), y: scaleYValue(tick) })),
    },
  };
};

export default scaleData;
