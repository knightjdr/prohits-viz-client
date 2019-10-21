import fillHeatmap from './heatmap/fill-heatmap';

const fillInteractiveState = (fileData, filename, taskID) => {
  switch (fileData.parameters.imageType) {
    case 'dotplot':
      return fillHeatmap(fileData, filename, taskID);
    case 'heatmap':
      return fillHeatmap(fileData, filename, taskID);
    default:
      return fileData;
  }
};

export default fillInteractiveState;
