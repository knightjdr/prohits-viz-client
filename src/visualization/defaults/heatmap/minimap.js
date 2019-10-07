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

const fillMinimap = (userMinimap) => {
  if (!userMinimap || !isObject(userMinimap) || Object.keys(userMinimap).length === 0) {
    return {
      main: { ...defaultState },
    };
  }

  return Object.keys(userMinimap).reduce((accum, selection) => {
    const {
      image,
      needSyncing,
      syncedImage,
    } = userMinimap[selection];
    const minimap = {
      ...defaultState,
    };

    // Confirm data uri exists and is valid for original and synced image.
    minimap.image = image && validateUri(image) ? image : defaultState.image;
    minimap.syncedImage = syncedImage && validateUri(syncedImage)
      ? syncedImage : defaultState.syncedImage;

    minimap.needSyncing = typeof needSyncing === 'boolean' ? needSyncing : defaultState.needSyncing;

    return {
      ...accum,
      [selection]: minimap,
    };
  }, {});
};

export default fillMinimap;
