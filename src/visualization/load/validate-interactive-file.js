import validateParameters from './validate-parameters';
import validateHeatmapFields from './validate-heatmap-fields';
import readInteractiveFile from './read-interactive-file';

const validateInteractiveFile = async (file) => {
  const data = await readInteractiveFile(file);

  const { parameters } = data;

  validateParameters(parameters);
  validateHeatmapFields(parameters.imageType, data);

  return data;
};

export default validateInteractiveFile;
