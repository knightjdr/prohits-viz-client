import fillAnalysis from '../analysis/analysis';
import fillAnnotations from './annotations';
import fillColumns from './columns';
import fillDimensions from './dimensions';
import fillDisplay from './display';
import fillExporter from './exporter';
import fillGprofiler from '../analysis/gprofiler';
import fillMarkers from './markers';
import fillMinimap from './minimap';
import fillPanel from './panel';
import fillParameters from './parameters';
import fillPOI from './poi';
import fillPosition from './position';
import fillRows from './rows';
import fillSearchStatus from './search-status';
import fillSettings from './settings';
import fillTabs from '../tabs';

const validateHeatmap = (file, filename, taskID) => {
  const {
    analysis,
    annotations,
    columnDB,
    columns,
    dimensions,
    display,
    exporter,
    gprofiler,
    markers,
    minimap,
    panel,
    parameters,
    poi,
    position,
    rowDB,
    rows,
    searchStatus,
    settings,
    tabs,
  } = file;

  return {
    analysis: fillAnalysis(analysis),
    annotations: fillAnnotations(annotations),
    columnDB,
    columns: fillColumns(columns, columnDB),
    dimensions: fillDimensions(dimensions, tabs?.availableSnapshots),
    display: fillDisplay(display),
    exporter: fillExporter(exporter),
    gprofiler: fillGprofiler(gprofiler),
    markers: fillMarkers(markers),
    minimap: fillMinimap(minimap),
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID),
    poi: fillPOI(poi),
    position: fillPosition(position),
    rowDB,
    rows: fillRows(rows, rowDB),
    searchStatus: fillSearchStatus(searchStatus),
    settings: fillSettings(settings),
    tabs: fillTabs(tabs),
  };
};

export default validateHeatmap;
