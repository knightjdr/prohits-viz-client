const getMarginSize = (wrapper, heatmap) => (
  wrapper - heatmap
);

const calculateElementPosition = (direction, height, wrapperHeight, width, windowWidth, offset) => {
  const wrapperHorizontalMargin = getMarginSize(windowWidth, width);
  const wrapperVerticalMargin = getMarginSize(wrapperHeight, height);

  return direction === 'horizontal'
    ? {
        bottom: (wrapperVerticalMargin - 80),
        right: (wrapperHorizontalMargin / 2) - 38,
        transform: 'rotate(-90deg)',
      }
    : {
        bottom: (wrapperVerticalMargin - 100) + (offset ? 30 : 0),
        right: (wrapperHorizontalMargin / 2) - 90,
        transform: null,
      };
};

export default calculateElementPosition;
