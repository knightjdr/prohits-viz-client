const calculateElementPosition = (direction, height, wrapperHeight, width, windowWidth, offset) => (
  direction === 'horizontal'
    ? {
      bottom: 40,
      right: ((windowWidth - width) / 2) - 32,
      transform: 'rotate(-90deg)',
    }
    : {
      bottom: (wrapperHeight - height - 90) + (offset ? 30 : 0),
      right: ((windowWidth - width) / 2) - 75,
      transform: null,
    }
);

export default calculateElementPosition;
