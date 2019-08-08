import fillPanel from './panel';
import fillParameters from './parameters';
import fillSettings from './settings';
import fillPlot from './plot';

const circHeatmap = (file, filename, taskID) => {
  const {
    panel,
    parameters,
    plot,
    plots,
    settings,
  } = file;
  return {
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID),
    plot: fillPlot(plot, plots),
    settings: fillSettings(settings, plots),
  };
};

export default circHeatmap;
