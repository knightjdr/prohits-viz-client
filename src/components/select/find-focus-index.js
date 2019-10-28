const findFocusIndex = (options, selectedValues) => (
  selectedValues.length > 0
    ? options.findIndex(option => option.value === selectedValues[0])
    : 0
);

export default findFocusIndex;
