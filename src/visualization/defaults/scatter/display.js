import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateBoolean, validateNumber } from '../../../utils/validate-type';

export const defaultState = {
  logTransform: false,
  plotFixed: false,
  selectedPlot: 0,
  transform: {
    matrix: {
      plot: '',
      xAxis: '',
      yAxis: '',
    },
    origin: {
      x: 0,
      y: 0,
    },
    scale: 1,
  },
};

export const fillSnapshotDisplay = (inputDisplay) => {
  const {
    logTransform,
    plotFixed,
    selectedPlot,
    transform,
  } = inputDisplay;

  return {
    logTransform: validateBoolean(logTransform, defaultState.logTransform),
    plotFixed: validateBoolean(plotFixed, defaultState.plotFixed),
    selectedPlot: validateNumber(selectedPlot, defaultState.selectedPlot),
    transform: isObject(transform) ? transform : defaultState.transform,
  };
};

const fillDisplay = (fileDisplayOptions) => {
  if (!fileDisplayOptions || !isObject(fileDisplayOptions) || Object.keys(fileDisplayOptions).length === 0) {
    return {
      main: { ...defaultState },
    };
  }

  return fillSnapshots(fileDisplayOptions, fillSnapshotDisplay);
};

export default fillDisplay;
