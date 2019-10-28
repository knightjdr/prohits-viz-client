const parseValue = (options, defaultValue) => {
  const defaultValues = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  const optionValues = options.map(option => option.value);
  return defaultValues.filter(value => optionValues.includes(value));
};

export default parseValue;
