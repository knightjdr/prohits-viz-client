// Pixel dimensions of elements around the plot.
const HORZ_PADDING = 30;
const NAVBAR_HEIGHT = 40;
const VERT_PADDING = 30;

const calculateHeight = (windowHeight) => (
  windowHeight - NAVBAR_HEIGHT - VERT_PADDING
);

const calculateWidth = (windowWidth) => (
  windowWidth - HORZ_PADDING
);

const defineDimensions = (windowHeight, windowWidth) => {
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
    halfSvg: dims.svg / 2,
    radius: (dims.svg - 100) / 2,
  };
};

export default defineDimensions;
