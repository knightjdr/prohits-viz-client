export const MINIMAP_SYNCHED = 'MINIMAP_SYNCHED';
export const MINIMAP_SYNCHRONIZING = 'MINIMAP_SYNCHRONIZING';
export const SYNC_ERROR = 'SYNC_ERROR';

export const minimapSynced = (selectionID, syncedImage) => ({
  selectionID,
  syncedImage,
  type: MINIMAP_SYNCHED,
});

export const synchronizeMinimap = (updateOriginal = false) => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  type: MINIMAP_SYNCHRONIZING,
  updateOriginal,
});

export const synchError = () => ({
  AUGMENT_WITH_ACTIVE_SELECTION: true,
  type: SYNC_ERROR,
});
