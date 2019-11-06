const getHighlightedValues = select => (
  Array(...select.options)
    .filter(option => option.selected)
    .map(option => parseInt(option.value, 10))
);

export default getHighlightedValues;
