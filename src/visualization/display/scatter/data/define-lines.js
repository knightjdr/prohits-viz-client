export const defineFcLines = (fcLines, ticks) => {
  const xMax = ticks.x[ticks.x.length - 1];
  const yMax = ticks.y[ticks.y.length - 1];

  return fcLines.map((fc) => {
    const magnitude = Math.abs(fc);
    const sign = Math.sign(fc);
    if (sign >= 0) {
      return {
        key: String(fc),
        x1: magnitude / 100,
        x2: xMax,
        y1: 0.01,
        y2: xMax / magnitude,
      };
    }
    return {
      key: String(fc),
      x1: 0.01,
      x2: yMax / magnitude,
      y1: magnitude / 100,
      y2: yMax,
    };
  });
};

export const defineMidline = (ticks) => {
  const coordinates = {};

  if (ticks.x[0] >= ticks.y[0]) {
    const xStart = ticks.x[0];
    coordinates.x1 = xStart;
    coordinates.y1 = xStart;
  } else {
    const yStart = ticks.y[0];
    coordinates.x1 = yStart;
    coordinates.y1 = yStart;
  }

  if (ticks.x[ticks.x.length - 1] >= ticks.y[ticks.y.length - 1]) {
    const yEnd = ticks.y[ticks.y.length - 1];
    coordinates.x2 = yEnd;
    coordinates.y2 = yEnd;
  } else {
    const xEnd = ticks.x[ticks.x.length - 1];
    coordinates.x2 = xEnd;
    coordinates.y2 = xEnd;
  }

  return coordinates;
};
