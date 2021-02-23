import fillCircHeatmap from './circheatmap/fill-circheatmap';
import fillHeatmap from './heatmap/fill-heatmap';
import fillScatter from './scatter/fill-scatter';

const fillInteractiveState = (fileData, filename, taskID) => {
  const { imageType } = fileData.parameters;
  if (imageType === 'circheatmap') {
    return fillCircHeatmap(fileData, filename, taskID);
  } if (imageType === 'dotplot' || imageType === 'heatmap') {
    return fillHeatmap(fileData, filename, taskID);
  } if (imageType === 'scatter') {
    return fillScatter(fileData, filename, taskID);
  }
  return fileData;
};

export default fillInteractiveState;
