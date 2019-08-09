import fillColumns from './columns';
import fillPanel from './panel';
import fillParameters from './parameters';
import fillPosition from './position';
import fillRows from './rows';
import fillSettings from './settings';

const heatmap = (file, filename, taskID, imageType) => {
  const {
    columns,
    panel,
    parameters,
    position,
    rows,
    settings,
  } = file;
  return {
    columns: fillColumns(columns),
    panel: fillPanel(panel),
    parameters: fillParameters(parameters, filename, taskID, imageType),
    position: fillPosition(position),
    rows: fillRows(rows),
    settings: fillSettings(settings),
  };
};

export default heatmap;
