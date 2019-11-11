import defineScoreCriterion from './define-score-criterion';

export const filterAndOrderColumns = (rowDB, rowOrder, columnOrder, scoreType, latestValues) => {
  const { minAbundance, primaryFilter } = latestValues;
  const isPassingScore = defineScoreCriterion(scoreType, primaryFilter);
  return columnOrder.filter(columnIndex => (
    rowOrder.some(rowIndex => (
      rowDB[rowIndex].data[columnIndex].value >= minAbundance
      && isPassingScore(rowDB[rowIndex].data[columnIndex].score)
    ))
  ));
};

export const filterAndOrderRows = (rowData, indices, scoreType, latestValues) => {
  const { minAbundance, primaryFilter } = latestValues;
  const isPassingScore = defineScoreCriterion(scoreType, primaryFilter);
  return indices.rows.filter(rowIndex => (
    indices.columns.some((columnIndex) => {
      const { score, value } = rowData[rowIndex].data[columnIndex];
      return value >= minAbundance && isPassingScore(score);
    })
  ));
};
