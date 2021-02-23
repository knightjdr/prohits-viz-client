const defineThickness = (numCircles, svgSize, desiredThickness) => {
  const radius = svgSize / 2;
  if (desiredThickness * (1 + (1.25 * numCircles)) > radius) {
    return Math.floor(radius / (1 + (1.25 * numCircles)));
  }
  return desiredThickness;
};

export default defineThickness;
