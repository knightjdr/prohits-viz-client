const fillColumns = (userColumns) => {
  if (!userColumns) {
    return {
      names: [],
      ref: null,
    };
  }

  const {
    ref,
    names,
  } = userColumns;
  const columns = {};

  columns.names = Array.isArray(names) ? names : [];
  // Ensure ref is within names.
  columns.ref = typeof ref === 'string' && columns.names.includes(ref) ? ref : null;

  return columns;
};

export default fillColumns;
