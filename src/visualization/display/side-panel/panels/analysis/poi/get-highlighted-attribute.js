const getHighlightedAttribute = (select, attribute = 'value') => {
  const parseAttribute = attribute === 'value'
    ? (value) => parseInt(value, 10)
    : (value) => value;

  return (
    Array(...select.options)
      .filter((option) => option.selected)
      .map((option) => parseAttribute(option[attribute]))
  );
};

export default getHighlightedAttribute;
