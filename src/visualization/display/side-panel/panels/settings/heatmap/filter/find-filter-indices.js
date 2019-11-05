const findFilterIndices = (columnDB, filterNames) => (
  filterNames.reduce((accum, name) => {
    const index = columnDB.indexOf(name);
    return index >= 0 ? [...accum, index] : accum;
  }, [])
);

export default findFilterIndices;
