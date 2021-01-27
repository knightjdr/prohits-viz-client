// Pixel dimensions of elements around the plot.
const HORZ_PADDING = 50;
const NAVBAR_HEIGHT = 40;
const VERT_PADDING = 50;

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
    radius: dims.svg / 2,
  };
};

export default defineDimensions;
