const getScaler = (ticks, options) => {
  const { axisLength, log } = options;
  const max = ticks[ticks.length - 1];
  if (log) {
    const min = ticks[0];
    const k = axisLength / (Math.log10(max) - Math.log10(min));
    const c = -1 * k * Math.log10(min);
    return (point) => k * Math.log10(point) + c;
  }
  return (point) => (point / max) * axisLength;
};

export default getScaler;
