// If the cursor is moved to create a negative height or width, swap
// the starting coordinates with the current cursor coordinate(s).
const calculateSelectionCoordinates = (startingCoordinates, currentCoordinates) => {
  if (!startingCoordinates) {
    return currentCoordinates;
  }

  const height = currentCoordinates.y - startingCoordinates.y;
  const width = currentCoordinates.x - startingCoordinates.x;
  if (height < 0 && width < 0) {
    return currentCoordinates;
  } if (height < 0) {
    return {
      x: startingCoordinates.x,
      y: currentCoordinates.y,
    };
  } if (width < 0) {
    return {
      x: currentCoordinates.x,
      y: startingCoordinates.y,
    };
  }
  return startingCoordinates;
};

export default calculateSelectionCoordinates;
