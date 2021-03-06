import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';

export const defaultState = {
  canTranslate: true,
  height: 0,
  width: 0,
  wrapperHeight: 0,
  wrapperWidth: 0,
};

export const fillSnapshotDimensions = () => ({
  ...defaultState,
});

const fillDimensions = (fileDimensions) => {
  if (!fileDimensions || !isObject(fileDimensions) || Object.keys(fileDimensions).length === 0) {
    return {
      main: { ...defaultState },
    };
  }

  return fillSnapshots(fileDimensions, fillSnapshotDimensions);
};

export default fillDimensions;
