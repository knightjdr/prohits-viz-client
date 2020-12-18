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

const getMaxLogTick = (max) => (
  10 ** Math.ceil(Math.log10(max))
);

const getMinLogTick = (min) => {
  const logValue = Math.log10(min);
  if (logValue < 0.1) {
    return 0.01;
  } if (logValue < 1) {
    return 0.1;
  }
  return 1;
};

const calculateLogTicks = (max, min, scale) => {
  const scaleFactor = getScaleFactor(scale, 1);
  const ticks = [];
  const base = getMinLogTick(min);
  const lastTick = getMaxLogTick(max);
  for (let i = base; i < lastTick; i *= 10) {
    ticks.push(i);
    const minorTick = (i * 10) / scaleFactor;
    for (let j = 1; j < scaleFactor; j += 1) {
      const tick = j * minorTick;
      ticks.push(tick);
    }
  }

  ticks.push(lastTick);

  return ticks;
};

const defineTicks = (data, options) => {
  const { logTransform, scale, vertex } = options;
  const max = data.reduce((maxValue, datum) => (datum[vertex] > maxValue ? datum[vertex] : maxValue), 0);
  const min = data.reduce((minValue, datum) => (datum[vertex] < minValue ? datum[vertex] : minValue), 1000);
  return logTransform ? calculateLogTicks(max, min, scale) : calculateLinearTicks(max, scale);
};

export default defineTicks;
