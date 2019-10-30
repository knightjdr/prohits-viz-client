const calculateRectPosition = (startingPosition, currentCooridinates) => {
  if (!startingPosition) {
    return currentCooridinates;
  }

  const height = currentCooridinates.y - startingPosition.coordinates.y;
  const width = currentCooridinates.x - startingPosition.coordinates.x;
  if (height < 0 && width < 0) {
    return currentCooridinates;
  } if (height < 0) {
    return {
      x: startingPosition.coordinates.x,
      y: currentCooridinates.y,
    };
  } if (width < 0) {
    return {
      x: currentCooridinates.x,
      y: startingPosition.coordinates.y,
    };
  }
  return startingPosition.coordinates;
};

export default calculateRectPosition;
