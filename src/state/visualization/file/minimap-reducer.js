import * as actions from './minimap-actions';
import * as fileActions from './interactive-file-actions';
import * as rowActions from './rows-actions';

export const defaultState = {
  image: null,
  isSyncing: false,
  needSyncing: false,
  syncError: false,
  syncedImage: null,
  updateOriginal: false,
};

const reducer = (state = { ...defaultState }, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return { ...defaultState };
    case actions.MINIMAP_SYNCHED:
      return {
        image: state.updateOriginal ? action.syncedImage : state.image,
        isSyncing: false,
        needSyncing: false,
        syncError: false,
        syncedImage: state.updateOriginal ? null : action.syncedImage,
        updateOriginal: false,
      };
    case actions.MINIMAP_SYNCHRONIZING:
      return {
        ...state,
        isSyncing: true,
        syncError: false,
        syncedImage: null,
        updateOriginal: action.updateOriginal,
      };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.minimap
        ? action.file.minimap
        : { ...defaultState };
    case rowActions.RESTORE_ROWS:
      return {
        ...state,
        isSyncing: false,
        needSyncing: false,
        syncError: false,
        syncedImage: null,
        updateOriginal: false,
      };
    case actions.SYNC_ERROR:
      return {
        ...state,
        isSyncing: false,
        syncError: true,
        syncedImage: null,
        updateOriginal: false,
      };
    case rowActions.UPDATE_ROWS:
      return {
        ...state,
        isSyncing: false,
        needSyncing: true,
        syncedImage: null,
        updateOriginal: false,
      };
    default:
      return state;
  }
};

export default reducer;
