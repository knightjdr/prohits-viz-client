export const DEFAULT_SORT_DIRECTION = 'ascending';

const swapDirection = (direction) => (
  direction === 'ascending' ? 'descending' : 'ascending'
);

const defineSortDirection = (currentField, newField, currentDirection) => (
  newField !== currentField ? DEFAULT_SORT_DIRECTION : swapDirection(currentDirection)
);

export default defineSortDirection;
