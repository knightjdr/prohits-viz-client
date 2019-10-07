export const MINIMAP_SYNCHED = 'MINIMAP_SYNCHED';
export const MINIMAP_SYNCHRONIZING = 'MINIMAP_SYNCHRONIZING';
export const SYNC_ERROR = 'SYNC_ERROR';

export const minimapSynced = (dataID, syncedImage) => ({
  dataID,
  syncedImage,
  type: MINIMAP_SYNCHED,
});

export const synchronizeMinimap = (dataID, updateOriginal = false) => ({
  dataID,
  type: MINIMAP_SYNCHRONIZING,
  updateOriginal,
});

export const synchError = dataID => ({
  dataID,
  type: SYNC_ERROR,
});
