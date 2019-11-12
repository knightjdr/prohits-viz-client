const calculateElementPosition = (direction, height, wrapperHeight, width, windowWidth, offset) => (
  direction === 'horizontal'
    ? {
      bottom: 30,
      right: ((windowWidth - width) / 2) - 75,
      transform: 'rotate(-90deg)',
    }
    : {
      bottom: (wrapperHeight - height - 100) + (offset ? 30 : 0),
      right: ((windowWidth - width) / 2) - 115,
      transform: null,
    }
);

export default calculateElementPosition;
