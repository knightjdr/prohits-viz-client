import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';

export const defaultState = {
  x: 0,
  y: 0,
};

export const fillSnapshotPosition = (inputPosition) => {
  const {
    x,
    y,
  } = inputPosition;
  const position = {};

  if (
    typeof x === 'number'
    && typeof y === 'number'
  ) {
    position.x = x;
    position.y = y;
  } else {
    position.x = defaultState.x;
    position.y = defaultState.y;
  }

  return position;
};

const fillPosition = (filePosition) => {
  if (!filePosition || !isObject(filePosition) || Object.keys(filePosition).length === 0) {
    return {
      main: { ...defaultState },
    };
  }

  return fillSnapshots(filePosition, fillSnapshotPosition);
};

export default fillPosition;
