const percentToCoordinate = (percent, radius) => {
  const x = radius * Math.cos(2 * Math.PI * percent);
  const y = radius * Math.sin(2 * Math.PI * percent);
  return [x, y];
};

export default percentToCoordinate;
