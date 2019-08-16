import reducer, { defaultState } from './minimap-reducer';
import * as actions from './minimap-actions';
import * as fileActions from './interactive-file-actions';
import * as rowActions from './rows-actions';

describe('Minimap reducer', () => {
  it('should return an empty initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_FILE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_FILE,
    };
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle MINIMAP_SYNCHED action', () => {
    const action = {
      syncedImage: 'image',
      type: actions.MINIMAP_SYNCHED,
    };
    const currentState = {
      ...defaultState,
      image: 'originalImage',
    };
    const expectedState = {
      ...defaultState,
      image: 'originalImage',
      isSyncing: false,
      needSyncing: false,
      syncError: false,
      syncedImage: 'image',
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle MINIMAP_SYNCHED action when updateOriginal is true', () => {
    const action = {
      syncedImage: 'image',
      type: actions.MINIMAP_SYNCHED,
    };
    const currentState = {
      ...defaultState,
      updateOriginal: true,
    };
    const expectedState = {
      ...defaultState,
      image: 'image',
      isSyncing: false,
      needSyncing: false,
      syncError: false,
      syncedImage: null,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle MINIMAP_SYNCHRONIZING action', () => {
    const action = {
      type: actions.MINIMAP_SYNCHRONIZING,
      updateOriginal: true,
    };
    const expectedState = {
      ...defaultState,
      isSyncing: true,
      syncError: false,
      syncedImage: null,
      updateOriginal: true,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  describe('parse file', () => {
    it('should handle PARSE_INTERACTIVE_FILE action when minimap field present', () => {
      const action = {
        file: {
          minimap: {
            ...defaultState,
            image: 'image',
          },
        },
        type: fileActions.PARSE_INTERACTIVE_FILE,
      };
      const expectedState = {
        ...defaultState,
        image: 'image',
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle PARSE_INTERACTIVE_FILE action when minimap field missing', () => {
      const action = {
        file: {},
        type: fileActions.PARSE_INTERACTIVE_FILE,
      };
      const expectedState = defaultState;
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  it('should handle RESTORE_ROWS action', () => {
    const action = {
      type: rowActions.RESTORE_ROWS,
    };
    const expectedState = {
      ...defaultState,
      isSyncing: false,
      needSyncing: false,
      syncError: false,
      syncedImage: null,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SYNC_ERROR action', () => {
    const action = {
      type: actions.SYNC_ERROR,
    };
    const expectedState = {
      ...defaultState,
      isSyncing: false,
      syncError: true,
      syncedImage: null,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_ROWS action', () => {
    const action = {
      type: rowActions.UPDATE_ROWS,
    };
    const expectedState = {
      ...defaultState,
      isSyncing: false,
      needSyncing: true,
      syncedImage: null,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
