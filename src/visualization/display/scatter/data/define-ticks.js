export const getScaleFactor = (scale, multiplier) => (
  scale < 1.5 ? 1 : Math.floor((scale - 1) / 0.5) * multiplier
);

export const calculateLinearTicks = ({ max, min }, scale) => {
  const maxAbsoluteValue = Math.max(Math.abs(max), Math.abs(min));
  const power = Math.floor(Math.log10(maxAbsoluteValue - 0.5));
  const step = (10 ** power) / getScaleFactor(scale, 2);

  const ticks = [];
  for (let i = min; i <= max; i += step) {
    ticks.push(i);
  }
  if (ticks[ticks.length - 1] !== max) {
    ticks.push(max);
  }
  return ticks;
};

export const calculateLogTicks = ({ max, min }, logBase, scale) => {
  const scaleFactor = getScaleFactor(scale, 1);

  const ticks = [];
  if (logBase === '2' && min < 0 && max > 0) {
    const end = -0.5 / scale;
    let stepMultipler = 1 / logBase;
    for (let i = min; i < max; i *= stepMultipler) {
      ticks.push(i);
      const nextMajorTick = i * stepMultipler;
      const tickDiff = nextMajorTick - i;
      const minorTickIncrement = tickDiff / scaleFactor;
      for (let j = 1; j < scaleFactor; j += 1) {
        const tick = i + (j * minorTickIncrement);
        ticks.push(tick);
      }
      if (i >= end && i < 0) {
        i = -ticks[ticks.length - 1] / 2;
        stepMultipler = logBase;
      }
    }
  } else if (logBase === '2') {
    const stepMultipler = min > 0 ? logBase : 1 / logBase;
    for (let i = min; i < max; i *= stepMultipler) {
      ticks.push(i);
      const nextMajorTick = i * stepMultipler;
      const tickDiff = nextMajorTick - i;
      const minorTickIncrement = tickDiff / scaleFactor;
      for (let j = 1; j < scaleFactor; j += 1) {
        const tick = i + (j * minorTickIncrement);
        ticks.push(tick);
      }
    }
  } else {
    for (let i = 0.1; i < max; i *= logBase) {
      ticks.push(i);
      const nextMajorTick = i * logBase;
      const minorTickIncrement = nextMajorTick / scaleFactor;
      for (let j = scaleFactor - 1; j >= 1; j -= 1) {
        const tick = nextMajorTick - (j * minorTickIncrement);
        ticks.push(tick);
      }
    }
  }

  ticks.push(max);

  return ticks;
};

const defineTicks = (axisBoundaries, options) => {
  const { logAxis, scale } = options;
  return logAxis !== 'none'
    ? calculateLogTicks(axisBoundaries, logAxis, scale)
    : calculateLinearTicks(axisBoundaries, scale);
};

export default defineTicks;
