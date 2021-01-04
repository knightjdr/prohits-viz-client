import fillAnalysis from '../analysis/analysis';
import fillCustomization from './customization';
import fillDimensions from './dimensions';
import fillDisplay from './display';
import fillLabels from './labels';
import fillLegend from './legend';
import fillPanel from './panel';
import fillParameters from './parameters';
import fillSearchStatus from './search-status';
import fillSettings from './settings';
import fillTabs from '../tabs';

const validateScatter = (file, filename, taskID) => {
  const {
    analysis,
    customization,
    dimensions,
    display,
    labels,
    legend,
    panel,
    parameters,
    plots,
    searchStatus,
    settings,
    tabs,
  } = file;

  return {
    analysis: fillAnalysis(analysis),
    customization: fillCustomization(customization),
    dimensions: fillDimensions(dimensions),
    display: fillDisplay(display),
    labels: fillLabels(labels),
    legend: fillLegend(legend),
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID),
    plots,
    searchStatus: fillSearchStatus(searchStatus),
    settings: fillSettings(settings),
    tabs: fillTabs(tabs),
  };
};

export default validateScatter;
