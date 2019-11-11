const canReSort = (columnDB, availableColumns, sortBy, sortByRef) => {
  const findIndex = term => (
    term ? columnDB.indexOf(term) : null
  );
  const defineStatus = sortIndex => (
    sortIndex >= 0 && availableColumns.includes(sortIndex)
  );

  const reSort = {
    status: false,
  };

  if (sortBy) {
    reSort.sortByIndex = findIndex(sortBy);
    reSort.status = defineStatus(reSort.sortByIndex);
  }
  if (reSort.status && sortByRef) {
    const sortByRefIndex = findIndex(sortByRef);
    reSort.sortByRefIndex = defineStatus(sortByRefIndex) ? sortByRefIndex : '';
  }

  return reSort;
};

export default canReSort;
