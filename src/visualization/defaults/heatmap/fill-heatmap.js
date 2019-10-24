import fillAnnotations from './annotations';
import fillColumns from './columns';
import fillDimensions from './dimensions';
import fillDisplay from './display';
import fillMinimap from './minimap';
import fillPanel from './panel';
import fillParameters from './parameters';
import fillPosition from './position';
import fillRows from './rows';
import fillSearchStatus from './search-status';
import fillSettings from './settings';
import fillTabs from '../tabs';

const validateHeatmap = (file, filename, taskID) => {
  const {
    annotations,
    columnDB,
    columns,
    dimensions,
    display,
    minimap,
    panel,
    parameters,
    position,
    rowDB,
    rows,
    searchStatus,
    settings,
    tabs,
  } = file;

  return {
    annotations: fillAnnotations(annotations),
    columnDB,
    columns: fillColumns(columns, columnDB),
    dimensions: fillDimensions(dimensions),
    display: fillDisplay(display),
    minimap: fillMinimap(minimap),
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID),
    position: fillPosition(position),
    rowDB,
    rows: fillRows(rows, rowDB),
    searchStatus: fillSearchStatus(searchStatus),
    settings: fillSettings(settings),
    tabs: fillTabs(tabs),
  };
};

export default validateHeatmap;
