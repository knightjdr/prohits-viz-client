const reorderArrayItem = (arr, sourceIndex, destinationIndex) => {
  const reordered = [...arr];
  reordered.splice(destinationIndex, 0, reordered.splice(sourceIndex, 1)[0]);
  return reordered;
};

export default reorderArrayItem;
