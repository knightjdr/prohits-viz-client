const calculateSelectionSize = (startingPosition, currentCooridinates) => (
  startingPosition
    ? {
      height: Math.abs(currentCooridinates.y - startingPosition.coordinates.y),
      width: Math.abs(currentCooridinates.x - startingPosition.coordinates.x),
    }
    : {
      height: 0,
      width: 0,
    }
);

export default calculateSelectionSize;
