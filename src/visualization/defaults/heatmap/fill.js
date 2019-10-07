import fillColumns from './columns';
import fillMinimap from './minimap';
import fillPanel from './panel';
import fillParameters from './parameters';
import fillPosition from './position';
import fillRows from './rows';
import fillSettings from './settings';
import fillTabs from '../tabs';

const heatmap = (file, filename, taskID, imageType) => {
  const {
    columnDB,
    columns,
    minimap,
    panel,
    parameters,
    position,
    rowDB,
    rows,
    settings,
    tabs,
  } = file;

  return {
    columns: fillColumns(columns, columnDB),
    minimap: fillMinimap(minimap),
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID, imageType),
    position: fillPosition(position),
    rows: fillRows(rows, rowDB),
    settings: fillSettings(settings),
    tabs: fillTabs(tabs),
  };
};

export default heatmap;
