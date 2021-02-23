import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateBoolean, validateNumber } from '../../../utils/validate-type';

export const defaultState = {
  plotFixed: false,
  selectedPlot: 0,
};

export const fillSnapshotDisplay = (inputDisplay) => {
  const {
    plotFixed,
    selectedPlot,
  } = inputDisplay;

  return {
    plotFixed: validateBoolean(plotFixed, defaultState.plotFixed),
    selectedPlot: validateNumber(selectedPlot, defaultState.selectedPlot),
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
