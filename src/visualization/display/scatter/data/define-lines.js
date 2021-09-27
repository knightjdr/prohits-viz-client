export const defineFcLines = (fcLines, ticks) => (
  fcLines.map((fc) => {
    const magnitude = Math.abs(fc);
    const sign = Math.sign(fc);
    if (sign >= 0) {
      const end = ticks.x[ticks.x.length - 1] === 0 ? -(magnitude / 100) : ticks.x[ticks.x.length - 1];
      const start = ticks.x[0] === 0 ? magnitude / 100 : ticks.x[0];
      return {
        key: String(fc),
        x1: start,
        x2: end,
        y1: start / magnitude,
        y2: end / magnitude,
      };
    }

    const end = ticks.y[ticks.y.length - 1] === 0 ? -(magnitude / 100) : ticks.y[ticks.y.length - 1];
    const start = ticks.y[0] === 0 ? magnitude / 100 : ticks.y[0];
    return {
      key: String(fc),
      x1: start / magnitude,
      x2: end / magnitude,
      y1: start,
      y2: end,
    };
  })
);

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
