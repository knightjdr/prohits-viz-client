const findOptionToFocus = (allIndices, indicesForFocus, startIndex) => {
  const max = allIndices.length;

  const recursive = (position) => {
    if (position >= max) {
      return indicesForFocus.length - 1;
    }
    const soughtIndex = allIndices[position];
    const focusIndex = indicesForFocus.indexOf(soughtIndex);
    if (focusIndex >= 0) {
      return focusIndex;
    }
    return recursive(position + 1);
  };

  return recursive(startIndex);
};

export default findOptionToFocus;
