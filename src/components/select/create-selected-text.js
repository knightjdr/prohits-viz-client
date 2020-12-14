const createSelectedText = (options, selectedValues) => {
  const textArray = selectedValues.reduce((accum, value) => {
    const selectedOption = options.find((option) => option.value === value);
    return selectedOption ? [...accum, selectedOption.label] : accum;
  }, []);
  return textArray.join(', ');
};

export default createSelectedText;
