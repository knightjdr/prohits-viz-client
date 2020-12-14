const formatMultipleReturnValue = (values) => (
  Array.isArray(values) ? values : [values]
);

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
