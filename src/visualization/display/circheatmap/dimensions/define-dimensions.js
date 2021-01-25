// Pixel dimensions of elements around the plot.
const DEFAULT_THICKNESS = 50;
const HORZ_PADDING = 50;
const NAVBAR_HEIGHT = 40;
const VERT_PADDING = 50;

const calculateHeight = (windowHeight) => (
  windowHeight - NAVBAR_HEIGHT - VERT_PADDING
);

const calculateWidth = (windowWidth) => (
  windowWidth - HORZ_PADDING
);

const defineThickness = (numCircles, svgSize) => {
  let thickness = DEFAULT_THICKNESS;
  const radius = svgSize / 2;
  if (thickness * (1 + (1.25 * numCircles)) > radius) {
    thickness = Math.floor(radius / (1 + (1.25 * numCircles)));
  }
  return thickness;
};

const defineDimensions = (windowHeight, windowWidth, numCircles) => {
  let dims = {};
  if (windowHeight > windowWidth) {
    dims = {
      canTranslate: false,
      svg: calculateWidth(windowWidth),
    };
  } else {
    dims = {
      canTranslate: true,
      svg: calculateHeight(windowHeight),
    };
  }

  return {
    ...dims,
    radius: dims.svg / 2,
    thickness: defineThickness(numCircles, dims.svg),
  };
};

export default defineDimensions;
