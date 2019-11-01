// If the cursor is moved to create a negative height or width selection, swap
// the starting position with the current cursor position.
const calculateSelectionPosition = (startingPosition, currentPosition) => {
  if (!startingPosition) {
    return currentPosition;
  }

  const height = currentPosition.y - startingPosition.y;
  const width = currentPosition.x - startingPosition.x;
  if (height < 0 && width < 0) {
    return currentPosition;
  } if (height < 0) {
    return {
      x: startingPosition.x,
      y: currentPosition.y,
    };
  } if (width < 0) {
    return {
      x: currentPosition.x,
      y: startingPosition.y,
    };
  }
  return startingPosition;
};

export default calculateSelectionPosition;
