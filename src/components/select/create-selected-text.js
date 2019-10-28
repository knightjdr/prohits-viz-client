const createSelectedText = (options, selectedValues) => {
  const textArray = selectedValues.map(value => options.find(option => option.value === value).label);
  return textArray.join(', ');
};

export default createSelectedText;
