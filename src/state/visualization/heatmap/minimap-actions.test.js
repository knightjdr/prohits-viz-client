import * as actions from './minimap-actions';

describe('Minimap actions', () => {
  it('should dispatch an action that the map is synced', () => {
    const expectedAction = {
      selectionID: 'main',
      syncedImage: 'image',
      type: actions.MINIMAP_SYNCHED,
    };
    expect(actions.minimapSynced('main', 'image')).toEqual(expectedAction);
  });

  describe('synchronizing', () => {
    it('should dispatch an action that the map is synchronizing', () => {
      const expectedAction = {
        AUGMENT_WITH_ACTIVE_SELECTION: true,
        type: actions.MINIMAP_SYNCHRONIZING,
        updateOriginal: false,
      };
      expect(actions.synchronizeMinimap()).toEqual(expectedAction);
    });

    it('should dispatch an action that the map is synchronizing and update original', () => {
      const expectedAction = {
        AUGMENT_WITH_ACTIVE_SELECTION: true,
        type: actions.MINIMAP_SYNCHRONIZING,
        updateOriginal: true,
      };
      expect(actions.synchronizeMinimap(true)).toEqual(expectedAction);
    });
  });

  it('should dispatch an action that the synchronizing gave an error', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SELECTION: true,
      type: actions.SYNC_ERROR,
    };
    expect(actions.synchError()).toEqual(expectedAction);
  });
});
