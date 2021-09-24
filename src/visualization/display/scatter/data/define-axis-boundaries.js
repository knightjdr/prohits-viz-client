const defineAxisMax = (data, vertex) => {
  const max = data.reduce((maxValue, datum) => (datum[vertex] > maxValue ? datum[vertex] : maxValue), -Infinity);
  return max > 0 ? max : 0;
};

const defineAxisMin = (data, vertex) => {
  const min = data.reduce((minValue, datum) => (datum[vertex] < minValue ? datum[vertex] : minValue), Infinity);
  return min < 0 ? min : 0;
};

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
    const logValue = Math.log2(value);
    if (logValue < 1) {
      return 0.5;
    }
    return 1;
  }

  const logValue = Math.log10(value);
  if (logValue < 1) {
    return 0.1;
  }

  return 1;
};

const defineLogTickLimits = (base, { max, min }) => ({
  max: max !== 0
    ? defineUpperLogTickLimit(base, Math.abs(max))
    : -1 * defineLowerLogTickLimit(base, Math.abs(max)),
  min: min !== 0
    ? -1 * defineUpperLogTickLimit(base, Math.abs(min))
    : defineLowerLogTickLimit(base, Math.abs(min)),
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
      min: defineAxisMin(data, 'x'),
    },
    y: {
      max: defineAxisMax(data, 'y'),
      min: defineAxisMin(data, 'y'),
    },
  };

  if (equalScaleAxes && (logX === logY)) {
    const max = Math.max(minMax.x.max, minMax.y.max);
    const min = Math.min(minMax.x.min, minMax.y.min);
    minMax.x.max = max;
    minMax.x.min = min;
    minMax.y.max = max;
    minMax.y.min = min;
  }

  return {
    x: logX === 'none' ? defineLinearTickLimits(minMax.x) : defineLogTickLimits(logX, minMax.x),
    y: logY === 'none' ? defineLinearTickLimits(minMax.y) : defineLogTickLimits(logY, minMax.y),
  };
};

export default defineAxisBoundaries;
