import * as actions from './minimap-actions';

describe('Minimap actions', () => {
  describe('synced map', () => {
    it('should dispatch an action that the map is synched', () => {
      const expectedAction = {
        syncedImage: 'image',
        type: actions.MINIMAP_SYNCHED,
        updateOriginal: false,
      };
      expect(actions.minimapSynced('image')).toEqual(expectedAction);
    });

    it('should dispatch an action that the map is synched and update original', () => {
      const expectedAction = {
        syncedImage: 'image',
        type: actions.MINIMAP_SYNCHED,
        updateOriginal: true,
      };
      expect(actions.minimapSynced('image', true)).toEqual(expectedAction);
    });
  });

  it('should dispatch an action that the map is synchronizing', () => {
    const expectedAction = {
      type: actions.MINIMAP_SYNCHRONIZING,
    };
    expect(actions.synchronizeMinimap()).toEqual(expectedAction);
  });

  it('should dispatch an action that the synchronizing gave an error', () => {
    const expectedAction = {
      type: actions.SYNC_ERROR,
    };
    expect(actions.synchError()).toEqual(expectedAction);
  });
});
