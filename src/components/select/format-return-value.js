const formatMultipleReturnValue = (values) => {
  const arr = Array.isArray(values) ? values : [values];
  return arr.filter((value) => value);
};

const formatSingleReturnValue = (values) => (
  Array.isArray(values) ? values.join(', ') : values
);

const formatReturnValue = (multiple, selectedValues) => {
  if (multiple) {
    return formatMultipleReturnValue(selectedValues);
  }
  return formatSingleReturnValue(selectedValues);
};

export default formatReturnValue;
