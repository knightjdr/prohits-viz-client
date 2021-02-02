import fillAnalysis from '../analysis/analysis';
import fillCircles from './circles';
import fillDisplay from './display';
import fillGprofiler from '../analysis/gprofiler';
import fillLabels from './labels';
import fillPanel from './panel';
import fillParameters from './parameters';
import fillPOI from './poi';
import fillSearchStatus from './search-status';
import fillSettings from './settings';
import fillTabs from '../tabs';

const validateCircHeatmap = (file, filename, taskID) => {
  const {
    analysis,
    circles,
    display,
    gprofiler,
    labels,
    panel,
    parameters,
    plots,
    poi,
    searchStatus,
    settings,
    tabs,
  } = file;

  return {
    analysis: fillAnalysis(analysis),
    circles: fillCircles(circles, plots),
    display: fillDisplay(display),
    gprofiler: fillGprofiler(gprofiler),
    labels: fillLabels(labels),
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID),
    plots,
    poi: fillPOI(poi),
    searchStatus: fillSearchStatus(searchStatus),
    settings: fillSettings(settings),
    tabs: fillTabs(tabs),
  };
};

export default validateCircHeatmap;
