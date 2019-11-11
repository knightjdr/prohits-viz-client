const defineLatestValues = (updatedSetting, updatedValue, updatedOrder, settings) => {
  const {
    filterBy,
    minAbundance,
    primaryFilter,
    removeEmptyColumns,
    sortBy,
    sortByRef,
  } = settings;

  return {
    minAbundance,
    filterBy,
    primaryFilter,
    removeEmptyColumns,
    sortBy: Object.keys(updatedOrder).length > 0 ? '' : sortBy,
    sortByRef,
    [updatedSetting]: updatedValue,
  };
};

export default defineLatestValues;
