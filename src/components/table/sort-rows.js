const defineSortFunction = (sortField, header) => {
  const headerIndex = header.findIndex(column => column.sortKey === sortField);
  return headerIndex > -1 && header[headerIndex].sort ? header[headerIndex].sort : (a, b) => a - b;
};

const sortRows = (rows, sortField, sortDirection, header) => {
  const sortTransform = defineSortFunction(sortField, header);
  const sortMultiplier = sortDirection === 'ascending' ? 1 : -1;
  rows.sort((rowA, rowB) => (
    sortMultiplier * sortTransform(rowA[sortField], rowB[sortField])
  ));
  return rows;
};

export default sortRows;
