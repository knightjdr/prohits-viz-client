const defineLatestValues = (updatedSetting, updatedValue, settings) => {
  const {
    filterBy,
    minAbundance,
    primaryFilter,
    removeEmptyColumns,
  } = settings;

  return {
    minAbundance,
    filterBy,
    primaryFilter,
    removeEmptyColumns,
    [updatedSetting]: updatedValue,
  };
};

export default defineLatestValues;
