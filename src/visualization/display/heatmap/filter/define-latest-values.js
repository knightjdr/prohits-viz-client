const defineLatestValues = (updatedSetting, updatedValue, updatedOrder, settings) => {
  const {
    filterBy,
    minAbundance,
    primaryFilter,
    removeFailingColumns,
    removeFailingRows,
    sortBy,
    sortByRef,
  } = settings;

  return {
    minAbundance,
    filterBy,
    primaryFilter,
    removeFailingColumns,
    removeFailingRows,
    sortBy: Object.keys(updatedOrder).length > 0 ? '' : sortBy,
    sortByRef,
    [updatedSetting]: updatedValue,
  };
};

export default defineLatestValues;
