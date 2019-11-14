const calculateElementPosition = (direction, height, wrapperHeight, width, windowWidth, offset) => (
  direction === 'horizontal'
    ? {
      bottom: 33,
      right: ((windowWidth - width) / 2) - 40,
      transform: 'rotate(-90deg)',
    }
    : {
      bottom: (wrapperHeight - height - 100) + (offset ? 30 : 0),
      right: ((windowWidth - width) / 2) - 80,
      transform: null,
    }
);

export default calculateElementPosition;
