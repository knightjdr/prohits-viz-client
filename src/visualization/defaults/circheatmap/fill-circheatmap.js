import fillCircles from './circles';
import fillDisplay from './display';
import fillPanel from './panel';
import fillParameters from './parameters';
import fillSettings from './settings';
import fillTabs from '../tabs';

const validateCircHeatmap = (file, filename, taskID) => {
  const {
    circles,
    display,
    panel,
    parameters,
    plots,
    settings,
    tabs,
  } = file;

  return {
    circles: fillCircles(circles, plots),
    display: fillDisplay(display),
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID),
    plots,
    settings: fillSettings(settings),
    tabs: fillTabs(tabs),
  };
};

export default validateCircHeatmap;
