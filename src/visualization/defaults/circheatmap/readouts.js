import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateArray } from '../../../utils/validate-type';

export const fillSnapshotReadouts = (inputReadouts, inputPlots, inputDisplay, snapshotID) => {
  const {
    current,
    default: defaultOrder,
  } = inputReadouts;

  const selectedPlot = inputDisplay?.[snapshotID]?.selectedPlot ?? 0;

  const validatedDefault = validateArray(
    defaultOrder,
    inputPlots[selectedPlot].readouts,
  );
  return {
    current: validateArray(current, validatedDefault),
    default: validatedDefault,
  };
};

const fillReadouts = (fileReadouts, filePlots, fileDisplay) => {
  if (!fileReadouts || !isObject(fileReadouts) || Object.keys(fileReadouts).length === 0) {
    return {
      main: {
        current: filePlots[fileDisplay?.selectedPlot ?? 0].readouts,
        default: filePlots[fileDisplay?.selectedPlot ?? 0].readouts,
      },
    };
  }

  return fillSnapshots(fileReadouts, fillSnapshotReadouts, filePlots, fileDisplay);
};

export default fillReadouts;
