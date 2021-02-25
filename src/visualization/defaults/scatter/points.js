import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateArray } from '../../../utils/validate-type';

export const fillSnapshotPoints = (inputPoints, inputPlots, inputDisplay, snapshotID) => {
  const {
    current,
    default: defaultOrder,
  } = inputPoints;

  const validatedDefault = validateArray(
    defaultOrder,
    inputPlots[inputDisplay?.[snapshotID]?.selectedPlot ?? 0].points,
  );
  return {
    current: validateArray(current, validatedDefault),
    default: validatedDefault,
  };
};

const fillPoints = (filePoints, filePlots, fileDisplay) => {
  if (!filePoints || !isObject(filePoints) || Object.keys(filePoints).length === 0) {
    return {
      main: {
        current: filePlots[fileDisplay?.selectedPlot ?? 0].points,
        default: filePlots[fileDisplay?.selectedPlot ?? 0].points,
      },
    };
  }

  return fillSnapshots(filePoints, fillSnapshotPoints, filePlots, fileDisplay);
};

export default fillPoints;
