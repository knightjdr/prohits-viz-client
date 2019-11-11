const appendValue = (values, newValue) => (
  [...values, newValue]
);

const removeValue = (values, index, canClear) => {
  if (!canClear && values.length === 1) {
    return [...values];
  }
  const updatedValues = [...values];
  updatedValues.splice(index, 1);
  return updatedValues;
};

export const updateMultipleValue = (currentValues, newValue, canClear) => {
  const index = currentValues.indexOf(newValue);
  return index >= 0
    ? removeValue(currentValues, index, canClear)
    : appendValue(currentValues, newValue);
};

export const updateSingleValue = (currentValue, newValue, canClear) => {
  if (canClear && currentValue && currentValue[0] === newValue) {
    return [];
  }
  return [newValue];
};

const updateSelectedValues = (currentValues, newValue, options) => {
  if (options.multiple) {
    return updateMultipleValue(currentValues, newValue, options.canClear);
  }
  return updateSingleValue(currentValues[0], newValue, options.canClear);
};

export default updateSelectedValues;
