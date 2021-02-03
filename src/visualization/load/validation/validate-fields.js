import validateCircHeatmap from './validate-circheatmap-fields';
import validateHeatmapFields from './validate-heatmap-fields';
import validateScatterFields from './validate-scatter-fields';

const validateFields = (imageType, data) => {
  if (imageType === 'scatter') {
    validateCircHeatmap(data);
  } if (imageType === 'dotplot' || imageType === 'heatmap') {
    validateHeatmapFields(data);
  } if (imageType === 'scatter') {
    validateScatterFields(data);
  }
};

export default validateFields;
