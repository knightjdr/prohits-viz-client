import percToCoord from '../../utils/percent-to-coordinate';
import roundNearest from '../../../../../utils/round-nearest';

const valuesToColor = (values, gradient, range) => (
  values.map((datum) => gradient[range(datum)])
);

const defineSegments = (values, readouts, options) => {
  const { gradient, radii, range } = options;

  const colorValues = valuesToColor(values, gradient, range);

  let cumulativePercent = 0;
  const last = {
    inner: [radii.inner, 0],
    outer: [radii.outer, 0],
  };
  const arc = colorValues.length < 2 ? 1 : 0;
  const percent = roundNearest(1 / colorValues.length, 0.000001);
  return colorValues.map((datum, index) => {
    cumulativePercent += percent;
    const innerPoint = percToCoord(cumulativePercent, radii.inner);
    const outerPoint = percToCoord(cumulativePercent, radii.outer);
    const start = {
      inner: [...last.inner],
      outer: [...last.outer],
    };
    last.inner = innerPoint;
    last.outer = outerPoint;
    return {
      a: {
        x: start.outer[0],
        y: start.outer[1],
      },
      b: {
        arc,
        x: outerPoint[0],
        y: outerPoint[1],
      },
      c: {
        x: innerPoint[0],
        y: innerPoint[1],
      },
      d: {
        arc,
        x: start.inner[0],
        y: start.inner[1],
      },
      fill: datum,
      readout: readouts[index],
    };
  });
};

export default defineSegments;
