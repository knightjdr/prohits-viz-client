export const MINIMAP_SYNCHED = 'MINIMAP_SYNCHED';
export const MINIMAP_SYNCHRONIZING = 'MINIMAP_SYNCHRONIZING';
export const SYNC_ERROR = 'SYNC_ERROR';

export const minimapSynced = (syncedImage, updateOriginal = false) => ({
  syncedImage,
  type: MINIMAP_SYNCHED,
  updateOriginal,
});

export const synchronizeMinimap = () => ({
  type: MINIMAP_SYNCHRONIZING,
});

export const synchError = () => ({
  type: SYNC_ERROR,
});
