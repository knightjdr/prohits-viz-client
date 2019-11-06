import reorderArrayItem from '../../../../../../../utils/reorder-array-item';

const applyDirection = (direction, indices) => {
  let increment = -1;
  if (direction === 'down') {
    increment = 1;
    indices.reverse();
  }

  return increment;
};

const mapHighlightedValuesToArrayIndices = (arr, highlighted) => (
  highlighted.map(item => arr.indexOf(item))
);

const validateDestinationIndex = (arr, destinationIndex) => {
  const max = arr.length - 1;
  let validatedIndex = destinationIndex;
  if (validatedIndex < 0) {
    validatedIndex = 0;
  }
  if (validatedIndex > max) {
    validatedIndex = max;
  }

  return validatedIndex;
};

const reorderElements = (arr, indices, increment) => {
  let newOrder = arr;
  indices.forEach((from) => {
    const to = validateDestinationIndex(newOrder, from + increment);
    newOrder = reorderArrayItem(newOrder, from, to);
  });

  return newOrder;
};


const reorderPOI = (direction, currentOrder, highlighted) => {
  const indices = mapHighlightedValuesToArrayIndices(currentOrder, highlighted);
  const increment = applyDirection(direction, indices);
  return reorderElements(currentOrder, indices, increment);
};

export default reorderPOI;
