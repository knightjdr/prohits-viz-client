import fillColumns from './columns';
import fillPanel from './panel';
import fillParameters from './parameters';
import fillPosition from './position';
import fillRows from './rows';
import fillSelection from './selection';
import fillSettings from './settings';

const heatmap = (file, filename, taskID, imageType) => {
  const {
    columns,
    panel,
    parameters,
    position,
    rows,
    selection,
    settings,
  } = file;
  return {
    columns: fillColumns(columns),
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID, imageType),
    position: fillPosition(position),
    rows: fillRows(rows),
    selection: fillSelection(selection, columns, rows),
    settings: fillSettings(settings),
  };
};

export default heatmap;
