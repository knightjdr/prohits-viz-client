import percentToCoordinate from '../utils/percent-to-coordinate';
import roundNearest from '../../../../utils/round-nearest';

const definePath = (data, radius) => {
  if (radius) {
    const known = data.reduce((accum, datum) => (datum.known ? accum + 1 : accum), 0);
    const percent = roundNearest(known / data.length, 0.0001);
    const point = percentToCoordinate(percent, radius);
    return {
      arc: percent > 0.5 ? 1 : 0,
      x: point[0],
      y: point[1],
    };
  }

  return {};
};

export default definePath;
