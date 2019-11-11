import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateBoolean } from '../../../utils/validate-type';

export const defaultState = {
  deleteFromImage: false,
  reorderImage: false,
  plotFixed: false,
  showTooltips: false,
};

export const fillSnapshotDisplay = (inputDisplay) => {
  const {
    deleteFromImage,
    reorderImage,
    plotFixed,
    showTooltips,
  } = inputDisplay;

  return {
    deleteFromImage: validateBoolean(deleteFromImage, defaultState.deleteFromImage),
    reorderImage: validateBoolean(reorderImage, defaultState.reorderImage),
    plotFixed: validateBoolean(plotFixed, defaultState.plotFixed),
    showTooltips: validateBoolean(showTooltips, defaultState.showTooltips),
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
