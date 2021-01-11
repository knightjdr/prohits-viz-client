import calculateCursorPosition from '../../common/overlay/calculate-cursor-position';

const calculateCursorCoordinates = (e, options) => {
  const { ref, scale } = options;

  const cursorPosition = calculateCursorPosition(e, ref);
  return {
    x: cursorPosition.x / scale,
    y: cursorPosition.y / scale,
  };
};

export default calculateCursorCoordinates;
