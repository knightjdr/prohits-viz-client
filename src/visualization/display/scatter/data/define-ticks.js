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

  const getMinorTickCalculator = () => {
    if (logBase === '2') {
      return (nextMajorTick, currentTick) => {
        const tickDiff = nextMajorTick - currentTick;
        const minorTickIncrement = tickDiff / scaleFactor;
        const minorTicks = [];
        for (let j = 1; j < scaleFactor; j += 1) {
          const tick = currentTick + (j * minorTickIncrement);
          minorTicks.push(tick);
        }
        return minorTicks;
      };
    }
    return (nextMajorTick, currentTick) => {
      const minorTickIncrement = currentTick < 0 ? currentTick / scaleFactor : nextMajorTick / scaleFactor;
      const tickStart = currentTick < 0 ? currentTick : nextMajorTick;
      const minorTicks = [];
      for (let j = scaleFactor - 1; j >= 1; j -= 1) {
        const tick = tickStart - (j * minorTickIncrement);
        minorTicks.push(tick);
      }
      return minorTicks;
    };
  };

  const addMinorTicks = getMinorTickCalculator();

  const ticks = [];
  let stepMultiplier = min > 0 ? logBase : 1 / logBase;
  if (min < 0 && max > 0) {
    const end = -1 / logBase / scale;
    for (let i = min; i < max; i *= stepMultiplier) {
      ticks.push(i);
      if (
        ticks[ticks.length - 1] >= end
        && ticks[ticks.length - 1] < 0
      ) {
        i = -ticks[ticks.length - 1] / logBase;
        stepMultiplier = logBase;
      } else {
        const nextMajorTick = i * stepMultiplier;
        ticks.push(...addMinorTicks(nextMajorTick, i));
      }
    }
  } else {
    for (let i = min; i < max; i *= stepMultiplier) {
      const nextMajorTick = i * stepMultiplier;
      ticks.push(i, ...addMinorTicks(nextMajorTick, i));
    }
  }
  ticks.push(max);

  return ticks;
};

const defineTicks = (axisBoundaries, options) => {
  const { logAxis, scale, userTicks } = options;
  if (Array.isArray(userTicks) && userTicks.length > 1) {
    return userTicks;
  }
  return logAxis !== 'none'
    ? calculateLogTicks(axisBoundaries, logAxis, scale)
    : calculateLinearTicks(axisBoundaries, scale);
};

export default defineTicks;
