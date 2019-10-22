import reducer, { defaultState } from './minimap-reducer';
import * as actions from './minimap-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as rowActions from './rows-actions';

describe('Minimap reducer', () => {
  it('should return an empty initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_STATE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_STATE,
    };
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle MINIMAP_SYNCHED action', () => {
    const currentState = {
      main: {
        ...defaultState,
        image: 'originalImage',
      },
    };

    const action = {
      selectionID: 'main',
      syncedImage: 'image',
      type: actions.MINIMAP_SYNCHED,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        image: 'originalImage',
        isSyncing: false,
        needSyncing: false,
        syncError: false,
        syncedImage: 'image',
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle MINIMAP_SYNCHED action when updateOriginal is true', () => {
    const currentState = {
      main: {
        ...defaultState,
        updateOriginal: true,
      },
    };

    const action = {
      selectionID: 'main',
      syncedImage: 'image',
      type: actions.MINIMAP_SYNCHED,
    };
    const expectedState = {
      ...currentState,
      main: {
        image: 'image',
        isSyncing: false,
        needSyncing: false,
        syncError: false,
        syncedImage: null,
        updateOriginal: false,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle MINIMAP_SYNCHRONIZING action', () => {
    const currentState = {
      main: {
        ...defaultState,
      },
    };

    const action = {
      selectionID: 'main',
      type: actions.MINIMAP_SYNCHRONIZING,
      updateOriginal: true,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        isSyncing: true,
        syncError: false,
        syncedImage: null,
        updateOriginal: true,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  describe('parse file', () => {
    it('should handle LOAD_INTERACTIVE_STATE action when minimap field present', () => {
      const action = {
        file: {
          minimap: {
            main: {
              ...defaultState,
              image: 'image',
            },
          },
        },
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = {
        main: {
          ...defaultState,
          image: 'image',
        },
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle LOAD_INTERACTIVE_STATE action when minimap field missing', () => {
      const action = {
        file: {},
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = {};
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  it('should handle RESET_IMAGE action', () => {
    const currentState = {
      main: {
        ...defaultState,
        image: 'image',
      },
    };

    const action = {
      selectionID: 'main',
      type: displayActions.RESET_IMAGE,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        isSyncing: false,
        needSyncing: false,
        syncError: false,
        syncedImage: null,
        updateOriginal: false,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SYNC_ERROR action', () => {
    const currentState = {
      main: {
        ...defaultState,
        image: 'image',
      },
    };

    const action = {
      selectionID: 'main',
      type: actions.SYNC_ERROR,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        isSyncing: false,
        syncError: true,
        syncedImage: null,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  describe('Row actions', () => {
    it('should handle FILTER_ROWS action', () => {
      const currentState = {
        main: {
          ...defaultState,
          image: 'image',
        },
      };

      const action = {
        selectionID: 'main',
        type: rowActions.FILTER_ROWS,
      };
      const expectedState = {
        ...currentState,
        main: {
          ...currentState.main,
          isSyncing: false,
          needSyncing: true,
          syncedImage: null,
        },
      };
      expect(reducer(currentState, action)).toEqual(expectedState);
    });

    it('should handle SORT_ROWS action', () => {
      const currentState = {
        main: {
          ...defaultState,
          image: 'image',
        },
      };

      const action = {
        selectionID: 'main',
        type: rowActions.SORT_ROWS,
      };
      const expectedState = {
        ...currentState,
        main: {
          ...currentState.main,
          isSyncing: false,
          needSyncing: true,
          syncedImage: null,
        },
      };
      expect(reducer(currentState, action)).toEqual(expectedState);
    });
  });
});
