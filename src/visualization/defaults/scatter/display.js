import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateBoolean, validateNumber, validateObject } from '../../../utils/validate-type';

export const defaultState = {
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
    plotFixed,
    selectedPlot,
    transform,
  } = inputDisplay;

  return {
    plotFixed: validateBoolean(plotFixed, defaultState.plotFixed),
    selectedPlot: validateNumber(selectedPlot, defaultState.selectedPlot),
    transform: validateObject(transform, defaultState.transform),
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
