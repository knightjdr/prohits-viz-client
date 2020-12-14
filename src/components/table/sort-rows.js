const defineSortFunction = (sortField, header) => {
  const headerIndex = header.findIndex((column) => column.sortKey === sortField);
  if (headerIndex > -1 && header[headerIndex].sort) {
    return header[headerIndex].sort;
  } if (headerIndex > -1) {
    return (a, b) => a.content - b.content;
  }
  return () => 0;
};

const defineSortMultiplier = (direction) => (
  direction === 'ascending' ? 1 : -1
);

const sortRows = (rows, sortField, sortDirection, header) => {
  const sortTransform = defineSortFunction(sortField, header);
  const sortMultiplier = defineSortMultiplier(sortDirection);
  rows.sort((rowA, rowB) => (
    sortMultiplier * sortTransform(rowA[sortField], rowB[sortField])
  ));
  return rows;
};

export default sortRows;
