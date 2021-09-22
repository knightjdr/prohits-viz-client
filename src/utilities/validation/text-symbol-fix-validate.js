const validateTextSymbolFix = (fields) => {
  const {
    columns: inputColumns,
  } = fields;

  const errors = {};

  return {
    fields: {
      columns: inputColumns,
    },
    errors,
  };
};

export default validateTextSymbolFix;
