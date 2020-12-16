import fillAnalysis from '../analysis/analysis';
import fillDimensions from './dimensions';
import fillDisplay from './display';
import fillPanel from './panel';
import fillParameters from './parameters';
import fillSettings from './settings';
import fillTabs from '../tabs';

const validateScatter = (file, filename, taskID) => {
  const {
    analysis,
    dimensions,
    display,
    panel,
    parameters,
    plots,
    settings,
    tabs,
  } = file;

  return {
    analysis: fillAnalysis(analysis),
    dimensions: fillDimensions(dimensions),
    display: fillDisplay(display),
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID),
    plots,
    settings: fillSettings(settings),
    tabs: fillTabs(tabs),
  };
};

export default validateScatter;
