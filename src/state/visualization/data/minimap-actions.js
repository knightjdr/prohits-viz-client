export const MINIMAP_SYNCHED = 'MINIMAP_SYNCHED';
export const MINIMAP_SYNCHRONIZING = 'MINIMAP_SYNCHRONIZING';
export const SYNC_ERROR = 'SYNC_ERROR';

export const minimapSynced = syncedImage => ({
  syncedImage,
  type: MINIMAP_SYNCHED,
});

export const synchronizeMinimap = (updateOriginal = false) => ({
  type: MINIMAP_SYNCHRONIZING,
  updateOriginal,
});

export const synchError = () => ({
  type: SYNC_ERROR,
});
