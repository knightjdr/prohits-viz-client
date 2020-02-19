const checkColumn = (form, columns, field) => {
  if (form[field] !== columns[field].initialValue && !form.header.includes(form[field])) {
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
