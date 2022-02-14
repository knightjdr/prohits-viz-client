const defineAxisMax = (data, vertex) => {
  const max = data.reduce((maxValue, datum) => (datum[vertex] > maxValue ? datum[vertex] : maxValue), -Infinity);
  return max > 0 ? max : 0;
};

const defineNonZeroAxisMax = (data, vertex) => (
  data.reduce((minValue, datum) => ((datum[vertex] > minValue && datum[vertex] !== 0) ? datum[vertex] : minValue), -Infinity)
);

const defineAxisMin = (data, vertex) => {
  const min = data.reduce((minValue, datum) => (datum[vertex] < minValue ? datum[vertex] : minValue), Infinity);
  return min < 0 ? min : 0;
};

const defineNonZeroAxisMin = (data, vertex) => (
  data.reduce((minValue, datum) => ((datum[vertex] < minValue && datum[vertex] !== 0) ? datum[vertex] : minValue), Infinity)
);

const defineLinearTickLimit = (value, method = 'ceil') => {
  if (value === 0) {
    return 0;
  }
  const exp = 10 ** Math.floor(Math.log10(Math.abs(value)));
  return Math[method](value / exp) * exp;
};

const defineLinearTickLimits = ({ max, min }) => {
  let axisMax = max;
  let axisMin = min;

  if (max > 0 && min < 0) {
    const powerMax = Math.floor(Math.log10(Math.abs(max)));
    const powerMin = Math.floor(Math.log10(Math.abs(min)));

    axisMax = powerMax < powerMin ? 10 ** powerMin : max;
    axisMin = powerMin < powerMax ? -(10 ** powerMax) : min;
  }

  return {
    max: defineLinearTickLimit(axisMax, max > 0 ? 'ceil' : 'floor'),
    min: defineLinearTickLimit(axisMin, min > 0 ? 'ceil' : 'floor'),
  };
};

const defineUpperLogTickLimit = (logBase, value) => (
  logBase === '2'
    ? 2 ** Math.ceil(Math.log2(value))
    : 10 ** Math.ceil(Math.log10(value))
);

const defineLowerLogTickLimit = (logBase, value) => {
  if (logBase === '2') {
    const logValue = 2 ** Math.floor(Math.log2(value));
    return logValue < 1 ? logValue : 0.5;
  }

  const logValue = 10 ** Math.floor(Math.log10(value));
  return logValue < 1 ? logValue : 1;
};

const defineLogTickLimits = (base, { max, maxNonZero, min, minNonZero }) => ({
  max: max !== 0
    ? defineUpperLogTickLimit(base, Math.abs(max))
    : -1 * defineLowerLogTickLimit(base, Math.abs(maxNonZero)),
  min: min !== 0
    ? -1 * defineUpperLogTickLimit(base, Math.abs(min))
    : defineLowerLogTickLimit(base, Math.abs(minNonZero)),
});

const defineAxisBoundaries = (data, options) => {
  const {
    equalScaleAxes,
    logX,
    logY,
  } = options;

  const minMax = {
    x: {
      max: defineAxisMax(data, 'x'),
      maxNonZero: defineNonZeroAxisMax(data, 'x'),
      min: defineAxisMin(data, 'x'),
      minNonZero: defineNonZeroAxisMin(data, 'x'),
    },
    y: {
      max: defineAxisMax(data, 'y'),
      maxNonZero: defineNonZeroAxisMax(data, 'y'),
      min: defineAxisMin(data, 'y'),
      minNonZero: defineNonZeroAxisMin(data, 'y'),
    },
  };

  if (equalScaleAxes && (logX === logY)) {
    const max = Math.max(minMax.x.max, minMax.y.max);
    const maxNonZero = Math.max(minMax.x.maxNonZero, minMax.y.maxNonZero);
    const min = Math.min(minMax.x.min, minMax.y.min);
    const minNonZero = Math.min(minMax.x.minNonZero, minMax.y.minNonZero);
    minMax.x.max = max;
    minMax.x.maxNonZero = maxNonZero;
    minMax.x.min = min;
    minMax.x.minNonZero = minNonZero;
    minMax.y.max = max;
    minMax.y.maxNonZero = maxNonZero;
    minMax.y.min = min;
    minMax.y.minNonZero = minNonZero;
  }

  return {
    x: logX === 'none' ? defineLinearTickLimits(minMax.x) : defineLogTickLimits(logX, minMax.x),
    y: logY === 'none' ? defineLinearTickLimits(minMax.y) : defineLogTickLimits(logY, minMax.y),
  };
};

export default defineAxisBoundaries;
