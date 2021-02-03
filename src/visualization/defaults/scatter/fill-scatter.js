import fillAnalysis from '../analysis/analysis';
import fillCustomization from './customization';
import fillDisplay from './display';
import fillGprofiler from '../analysis/gprofiler';
import fillLabels from './labels';
import fillLegend from './legend';
import fillLines from './lines';
import fillPanel from './panel';
import fillParameters from './parameters';
import fillPOI from './poi';
import fillSearchStatus from './search-status';
import fillSettings from './settings';
import fillTabs from '../tabs';

const validateScatter = (file, filename, taskID) => {
  const {
    analysis,
    customization,
    display,
    gprofiler,
    labels,
    legend,
    lines,
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
    customization: fillCustomization(customization),
    display: fillDisplay(display),
    gprofiler: fillGprofiler(gprofiler),
    labels: fillLabels(labels),
    legend: fillLegend(legend),
    lines: fillLines(lines),
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID),
    plots,
    poi: fillPOI(poi),
    searchStatus: fillSearchStatus(searchStatus),
    settings: fillSettings(settings),
    tabs: fillTabs(tabs),
  };
};

export default validateScatter;
