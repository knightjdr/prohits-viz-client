export const getScaleFactor = (scale, multiplier) => (
  scale < 1.5 ? 1 : Math.floor((scale - 1) / 0.5) * multiplier
);

export const getUpperLinearTick = (max) => {
  const exp = 10 ** Math.floor(Math.log10(max));
  return Math.ceil(max / exp) * exp;
};

export const calculateLinearTicks = (max, scale) => {
  const power = Math.floor(Math.log10(max));
  const step = (10 ** power) / getScaleFactor(scale, 2);
  const ticks = [];
  const lastTick = getUpperLinearTick(max);
  for (let i = 0; i <= lastTick; i += step) {
    ticks.push(i);
  }
  if (ticks[ticks.length - 1] !== lastTick) {
    ticks.push(lastTick);
  }
  return ticks;
};

export const getUpperLogTick = (logBase, max) => (
  logBase === '2'
    ? 2 ** Math.ceil(Math.log2(max))
    : 10 ** Math.ceil(Math.log10(max))
);

export const getLowerLogTick = (logBase, min) => {
  if (logBase === '2') {
    const logValue = Math.log2(min);
    if (logValue < 0.25) {
      return 0.125;
    } if (logValue < 0.5) {
      return 0.25;
    }
    return 1;
  }

  const logValue = Math.log10(min);
  if (logValue < 0.1) {
    return 0.01;
  } if (logValue < 1) {
    return 0.1;
  }
  return 1;
};

export const calculateLogTicks = (logBase, max, min, scale) => {
  const scaleFactor = getScaleFactor(scale, 1);
  const ticks = [];
  const firstTick = getLowerLogTick(logBase, min);
  const lastTick = getUpperLogTick(logBase, max);

  if (logBase === '2') {
    for (let i = firstTick; i < lastTick; i *= logBase) {
      ticks.push(i);
      const nextMajorTick = i * logBase;
      const tickDiff = nextMajorTick - i;
      const minorTickIncrement = tickDiff / scaleFactor;
      for (let j = 1; j < scaleFactor; j += 1) {
        const tick = i + (j * minorTickIncrement);
        ticks.push(tick);
      }
    }
  } else {
    for (let i = firstTick; i < lastTick; i *= logBase) {
      ticks.push(i);
      const nextMajorTick = i * logBase;
      const minorTickIncrement = nextMajorTick / scaleFactor;
      for (let j = scaleFactor - 1; j >= 1; j -= 1) {
        const tick = nextMajorTick - (j * minorTickIncrement);
        ticks.push(tick);
      }
    }
  }

  ticks.push(lastTick);

  return ticks;
};

const defineTicks = (data, options) => {
  const { logBase, scale, vertex } = options;
  const max = data.reduce((maxValue, datum) => (datum[vertex] > maxValue ? datum[vertex] : maxValue), 0);
  const min = data.reduce((minValue, datum) => (datum[vertex] < minValue ? datum[vertex] : minValue), Infinity);
  return logBase !== 'none' ? calculateLogTicks(logBase, max, min, scale) : calculateLinearTicks(max, scale);
};

export default defineTicks;
