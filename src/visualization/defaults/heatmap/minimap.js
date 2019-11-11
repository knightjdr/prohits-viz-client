import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import validateUri from '../../../utils/validate-uri';

export const defaultState = {
  image: null,
  isSyncing: false,
  needSyncing: false,
  syncError: false,
  syncedImage: null,
  updateOriginal: false,
};

export const fillSnapshotMinimap = (inputMinimap) => {
  const {
    image,
    needSyncing,
    syncedImage,
  } = inputMinimap;

  return {
    ...defaultState,
    image: image && validateUri(image) ? image : defaultState.image,
    syncedImage: syncedImage && validateUri(syncedImage)
      ? syncedImage : defaultState.syncedImage,
    needSyncing: typeof needSyncing === 'boolean' ? needSyncing : defaultState.needSyncing,
  };
};

const fillMinimap = (fileMinimap) => {
  if (!fileMinimap || !isObject(fileMinimap) || Object.keys(fileMinimap).length === 0) {
    return {
      main: { ...defaultState },
    };
  }

  return fillSnapshots(fileMinimap, fillSnapshotMinimap);
};

export default fillMinimap;
