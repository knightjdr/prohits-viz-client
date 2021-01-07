import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateArray, validateBoolean, validateNumber } from '../../../utils/validate-type';

export const defaultState = {
  dashLength: 4,
  fclines: [],
  isDashed: true,
  showFcLines: false,
  showMidline: false,
};

export const fillSnapshotLines = (inputLines) => {
  const {
    dashLength,
    fclines,
    isDashed,
    showFcLines,
    showMidline,
  } = inputLines;

  return {
    dashLength: validateNumber(dashLength, defaultState.dashLength),
    fclines: validateArray(fclines, defaultState.fclines),
    isDashed: validateBoolean(isDashed, defaultState.isDashed),
    showFcLines: validateBoolean(showFcLines, defaultState.showFcLines),
    showMidline: validateBoolean(showMidline, defaultState.showMidline),
  };
};

const fillLines = (fileLines) => {
  let lines = fileLines;
  if (!lines || !isObject(lines) || Object.keys(lines).length === 0) {
    return {
      main: { ...defaultState },
    };
  } if (isObject(lines) && Object.keys(lines).length > 0 && !lines.main) {
    lines = {
      main: { ...lines },
    };
  }

  return fillSnapshots(lines, fillSnapshotLines);
};

export default fillLines;
