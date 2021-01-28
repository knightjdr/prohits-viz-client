import fillCircles from './circles';
import fillDisplay from './display';
import fillLabels from './labels';
import fillPanel from './panel';
import fillParameters from './parameters';
import fillSearchStatus from './search-status';
import fillSettings from './settings';
import fillTabs from '../tabs';

const validateCircHeatmap = (file, filename, taskID) => {
  const {
    circles,
    display,
    labels,
    panel,
    parameters,
    plots,
    searchStatus,
    settings,
    tabs,
  } = file;

  return {
    circles: fillCircles(circles, plots),
    display: fillDisplay(display),
    labels: fillLabels(labels),
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID),
    plots,
    searchStatus: fillSearchStatus(searchStatus),
    settings: fillSettings(settings),
    tabs: fillTabs(tabs),
  };
};

export default validateCircHeatmap;
