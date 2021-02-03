import round from '../../../../utils/round';

const percentToCoordinate = (percent, radius) => {
  const x = round(radius * Math.cos(2 * Math.PI * percent), 5);
  const y = round(radius * Math.sin(2 * Math.PI * percent), 5);
  return [x, y];
};

export default percentToCoordinate;
