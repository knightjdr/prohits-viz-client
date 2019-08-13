/* Creates a list of row names and a map to the index. It will filter the list
** based on the currently available rows. */
const rowMapping = (selectionRows, orderedRows) => {
  const rowDict = selectionRows.reduce((accum, name) => ({
    ...accum,
    [name]: true,
  }), {});

  /* Get list of rows names that are present in the selection
  ** menu. Rows already selected won't be available. */
  const rows = orderedRows.reduce((accum, item) => {
    if (rowDict[item.name]) {
      return [...accum, item.name];
    }
    return accum;
  }, []);

  const rowMap = rows.reduce((accum, item, index) => {
    const newItem = {};
    newItem[item] = index;
    return {
      ...accum,
      ...newItem,
    };
  }, {});

  return {
    list: rows,
    mapped: rowMap,
  };
};

export default rowMapping;
