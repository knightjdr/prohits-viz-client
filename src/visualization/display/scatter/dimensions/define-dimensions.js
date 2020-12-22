// Pixel dimensions of elements around the plot.
const AXIS_MARGIN = 100;
const AXIS_TEXT_PADDING = 50;
const HORZ_PADDING = 50;
const NAVBAR_HEIGHT = 40;
const VERT_PADDING = 50;

const calculateHeight = (windowHeight) => {
  const wrapper = windowHeight - NAVBAR_HEIGHT - VERT_PADDING;
  const plot = wrapper - AXIS_MARGIN - AXIS_TEXT_PADDING;

  return {
    plot,
    wrapper,
  };
};

const calculateWidth = (windowWidth) => {
  const wrapper = windowWidth - HORZ_PADDING;
  const plot = wrapper - AXIS_MARGIN - AXIS_TEXT_PADDING;

  return {
    plot,
    wrapper,
  };
};

const defineDimensions = (windowHeight, windowWidth) => {
  if (windowHeight > windowWidth) {
    return {
      ...calculateWidth(windowWidth),
      canTranslate: false,
    };
  }
  return {
    ...calculateHeight(windowHeight),
    canTranslate: true,
  };
};

export default defineDimensions;
