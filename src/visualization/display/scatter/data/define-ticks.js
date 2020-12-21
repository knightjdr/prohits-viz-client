const getScaleFactor = (scale, multiplier) => (
  scale < 1.5 ? 1 : Math.floor((scale - 1) / 0.5) * multiplier
);

const getMaxLinearTick = (max) => {
  const exp = 10 ** Math.floor(Math.log10(max));
  return Math.ceil(max / exp) * exp;
};

const calculateLinearTicks = (max, scale) => {
  const power = Math.floor(Math.log10(max - 0));
  const step = (10 ** power) / getScaleFactor(scale, 2);
  const ticks = [];
  const lastTick = getMaxLinearTick(max);
  for (let i = 0; i <= lastTick; i += step) {
    ticks.push(i);
  }
  if (ticks[ticks.length - 1] !== lastTick) {
    ticks.push(lastTick);
  }
  return ticks;
};

const getMaxLogTick = (logBase, max) => (
  logBase === '2'
    ? 2 ** Math.ceil(Math.log2(max))
    : 10 ** Math.ceil(Math.log10(max))
);

const getMinLogTick = (logBase, min) => {
  const logValue = logBase === '2' ? Math.log2(min) : Math.log10(min);
  if (logValue < 0.1) {
    return 0.01;
  } if (logValue < 1) {
    return 0.1;
  }
  return 1;
};

const calculateLogTicks = (logBase, max, min, scale) => {
  const scaleFactor = getScaleFactor(scale, 1);
  const ticks = [];
  const base = getMinLogTick(logBase, min);
  const lastTick = getMaxLogTick(logBase, max);
  for (let i = base; i < lastTick; i *= logBase) {
    ticks.push(i);
    const minorTick = (i * logBase) / scaleFactor;
    for (let j = 1; j < scaleFactor; j += 1) {
      const tick = j * minorTick;
      ticks.push(tick);
    }
  }

  ticks.push(lastTick);

  return ticks;
};

const defineTicks = (data, options) => {
  const { logBase, scale, vertex } = options;
  const max = data.reduce((maxValue, datum) => (datum[vertex] > maxValue ? datum[vertex] : maxValue), 0);
  const min = data.reduce((minValue, datum) => (datum[vertex] < minValue ? datum[vertex] : minValue), 1000);
  return logBase !== 'none' ? calculateLogTicks(logBase, max, min, scale) : calculateLinearTicks(max, scale);
};

export default defineTicks;
