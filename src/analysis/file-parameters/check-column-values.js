const checkColumn = (form, columns, field) => {
  if (
    typeof form[field] === 'string'
    && form[field] !== columns[field].initialValue
    && !form.header.includes(form[field])
  ) {
    return {
      shouldUpdate: true,
      value: columns[field].initialValue,
    };
  }
  if (
    Array.isArray(form[field])
    && !form[field].every((column) => form.header.includes(column))
  ) {
    return {
      shouldUpdate: true,
      value: columns[field].initialValue,
    };
  }
  return {};
};

const checkColumnValues = (columns, form, fields) => {
  let shouldUpdate = false;
  const updated = {};

  fields.forEach((field) => {
    const result = checkColumn(form, columns, field);
    if (result.shouldUpdate) {
      shouldUpdate = true;
      updated[field] = result.value;
    }
  });

  return {
    shouldUpdate,
    updated,
  };
};

export default checkColumnValues;
