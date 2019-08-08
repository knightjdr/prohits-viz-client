import circHeatmap from './circ-heatmap/fill';
import heatmap from './heatmap/fill';

const fill = (file, filename, taskID) => {
  switch (file.parameters.imageType) {
    case 'circ-heatmap':
      return circHeatmap(file, filename, taskID);
    case 'dotplot':
      return heatmap(file, filename, taskID, 'dotplot');
    case 'heatmap':
      return heatmap(file, filename, taskID, 'heatmap');
    default:
      return file;
  }
};

export default fill;
