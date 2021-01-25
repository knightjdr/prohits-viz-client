import fillDisplay from './display';
import fillLegend from './legend';
import fillPanel from './panel';
import fillParameters from './parameters';
import fillSettings from './settings';
import fillTabs from '../tabs';

const validateCircHeatmap = (file, filename, taskID) => {
  const {
    display,
    legend,
    panel,
    parameters,
    plots,
    settings,
    tabs,
  } = file;

  return {
    display: fillDisplay(display),
    legend: fillLegend(legend),
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID),
    plots,
    settings: fillSettings(settings),
    tabs: fillTabs(tabs),
  };
};

export default validateCircHeatmap;
