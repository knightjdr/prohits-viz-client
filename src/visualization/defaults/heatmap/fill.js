import fillPanel from './panel';
import fillParameters from './parameters';
import fillSettings from './settings';

const heatmap = (file, filename, taskID, imageType) => {
  const {
    panel,
    parameters,
    settings,
  } = file;
  return {
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID, imageType),
    settings: fillSettings(settings),
  };
};

export default heatmap;
