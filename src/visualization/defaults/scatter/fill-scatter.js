import fillAnalysis from '../analysis/analysis';
import fillCustomization from './customization';
import fillDimensions from './dimensions';
import fillDisplay from './display';
import fillGprofiler from '../analysis/gprofiler';
import fillLabels from './labels';
import fillLegend from './legend';
import fillLines from './lines';
import fillPanel from './panel';
import fillParameters from './parameters';
import fillPOI from './poi';
import fillPoints from './points';
import fillSearchStatus from './search-status';
import fillSettings from './settings';
import fillTabs from '../tabs';

const validateScatter = (file, filename, taskID) => {
  const {
    analysis,
    customization,
    dimensions,
    display,
    gprofiler,
    labels,
    legend,
    lines,
    panel,
    parameters,
    plots,
    poi,
    points,
    searchStatus,
    settings,
    tabs,
  } = file;

  return {
    analysis: fillAnalysis(analysis),
    customization: fillCustomization(customization),
    dimensions: fillDimensions(dimensions),
    display: fillDisplay(display),
    gprofiler: fillGprofiler(gprofiler),
    labels: fillLabels(labels),
    legend: fillLegend(legend),
    lines: fillLines(lines),
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID),
    plots,
    poi: fillPOI(poi),
    points: fillPoints(points, plots, display),
    searchStatus: fillSearchStatus(searchStatus),
    settings: fillSettings(settings),
    tabs: fillTabs(tabs),
  };
};

export default validateScatter;
