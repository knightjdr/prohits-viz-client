const calculateSelectionSize = (startingPosition, currentPosition) => (
  startingPosition
    ? {
        height: Math.abs(currentPosition.y - startingPosition.y),
        width: Math.abs(currentPosition.x - startingPosition.x),
      }
    : {
        height: 0,
        width: 0,
      }
);

export default calculateSelectionSize;
