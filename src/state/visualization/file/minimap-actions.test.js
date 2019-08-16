import * as actions from './minimap-actions';

describe('Minimap actions', () => {
  it('should dispatch an action that the map is synced', () => {
    const expectedAction = {
      syncedImage: 'image',
      type: actions.MINIMAP_SYNCHED,
    };
    expect(actions.minimapSynced('image')).toEqual(expectedAction);
  });

  describe('synchronizing', () => {
    it('should dispatch an action that the map is synchronizing', () => {
      const expectedAction = {
        type: actions.MINIMAP_SYNCHRONIZING,
        updateOriginal: false,
      };
      expect(actions.synchronizeMinimap()).toEqual(expectedAction);
    });

    it('should dispatch an action that the map is synchronizing and update original', () => {
      const expectedAction = {
        type: actions.MINIMAP_SYNCHRONIZING,
        updateOriginal: true,
      };
      expect(actions.synchronizeMinimap(true)).toEqual(expectedAction);
    });
  });

  it('should dispatch an action that the synchronizing gave an error', () => {
    const expectedAction = {
      type: actions.SYNC_ERROR,
    };
    expect(actions.synchError()).toEqual(expectedAction);
  });
});
