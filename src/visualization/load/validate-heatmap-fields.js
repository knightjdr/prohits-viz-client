import { validateColumnDB, validateRowDB } from './validate-heatmap-db';

const validateHeatmapFields = (imageType, data) => {
  if (
    imageType === 'dotplot'
    || imageType === 'heatmap'
  ) {
    const {
      columnDB,
      rowDB,
    } = data;

    validateColumnDB(columnDB);
    validateRowDB(rowDB);
  }
};

export default validateHeatmapFields;
