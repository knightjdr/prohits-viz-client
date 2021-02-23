// Pixel dimensions for elements around the plot.
const HORZ_PADDING = 20;
const NAVBAR_HEIGHT = 40;
const RADIUS_PADDING = 30;
const TEXT_PADDING = 200;
const VERT_PADDING = 30;

const calculateAvailableHeight = (windowHeight) => (
  windowHeight - NAVBAR_HEIGHT - VERT_PADDING
);

const calculateAvailableWidth = (windowWidth) => (
  windowWidth - HORZ_PADDING - TEXT_PADDING
);

const calculateWidth = (width) => (
  width + TEXT_PADDING
);

const defineDimensions = (windowHeight, windowWidth) => {
  const availableHeight = calculateAvailableHeight(windowHeight);
  const availableWidth = calculateAvailableWidth(windowWidth);

  if (availableHeight > availableWidth) {
    const height = availableWidth;
    const width = calculateWidth(availableWidth);
    return {
      canTranslate: false,
      center: { x: (width + HORZ_PADDING) / 2, y: height / 2 },
      radius: (availableWidth - RADIUS_PADDING) / 2,
      svgWidth: width,
      svgHeight: height,
    };
  }

  const height = availableHeight;
  const width = calculateWidth(availableHeight);
  return {
    canTranslate: true,
    center: { x: (width + HORZ_PADDING) / 2, y: height / 2 },
    radius: (availableHeight - RADIUS_PADDING) / 2,
    svgWidth: width,
    svgHeight: height,
  };
};

export default defineDimensions;
