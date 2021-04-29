import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';

export const defaultState = {
  canTranslate: true,
  columns: 0,
  height: 0,
  pageX: 0,
  pageY: 0,
  rows: 0,
  width: 0,
  wrapperHeight: 0,
  wrapperWidth: 0,
};

export const fillSnapshotDimensions = () => ({
  ...defaultState,
});

const fillDimensions = (fileDimensions, snapshots) => {
  if (!fileDimensions || !isObject(fileDimensions) || Object.keys(fileDimensions).length === 0) {
    if (snapshots && snapshots.length > 0) {
      return snapshots.reduce((accum, snapshot) => ({
        ...accum,
        [snapshot]: { ...defaultState },
      }), {});
    }
    return {
      main: { ...defaultState },
    };
  }

  return fillSnapshots(fileDimensions, fillSnapshotDimensions);
};

export default fillDimensions;
