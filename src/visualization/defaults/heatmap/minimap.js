import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import validateUri from '../../../utils/validate-uri';
import { validateBoolean } from '../../../utils/validate-type';

export const defaultState = {
  image: null,
  isSyncing: false,
  needSyncing: true,
  syncError: false,
  syncedImage: null,
  updateOriginal: false,
};

const validateNeedSyncing = (image, needSyncing, defaultState) => {
  if (!image) {
    return true;
  }
  return validateBoolean(needSyncing, defaultState.needSyncing);
};

export const fillSnapshotMinimap = (inputMinimap) => {
  const {
    image,
    needSyncing,
    syncedImage,
  } = inputMinimap;

  const validatedImage = image && validateUri(image) ? image : defaultState.image;
  return {
    ...defaultState,
    image: validatedImage,
    syncedImage: syncedImage && validateUri(syncedImage)
      ? syncedImage
      : defaultState.syncedImage,
    needSyncing: validateNeedSyncing(validatedImage, needSyncing, defaultState.needSyncing),
  };
};

const fillMinimap = (fileMinimap) => {
  if (!fileMinimap || !isObject(fileMinimap) || Object.keys(fileMinimap).length === 0) {
    return {
      main: {
        ...defaultState,
      },
    };
  }

  return fillSnapshots(fileMinimap, fillSnapshotMinimap);
};

export default fillMinimap;
