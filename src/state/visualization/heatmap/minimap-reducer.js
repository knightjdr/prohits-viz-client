import * as actions from './minimap-actions';
import * as columnActions from './columns-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as rowActions from './rows-actions';

export const defaultState = {
  image: null,
  isSyncing: false,
  needSyncing: false,
  syncError: false,
  syncedImage: null,
  updateOriginal: false,
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case actions.MINIMAP_SYNCHED:
      return {
        ...state,
        [action.selectionID]: {
          ...state[action.selectionID],
          image: state[action.selectionID].updateOriginal ? action.syncedImage : state[action.selectionID].image,
          isSyncing: false,
          needSyncing: false,
          syncError: false,
          syncedImage: state[action.selectionID].updateOriginal ? null : action.syncedImage,
          updateOriginal: false,
        },
      };
    case actions.MINIMAP_SYNCHRONIZING:
      return {
        ...state,
        [action.selectionID]: {
          ...state[action.selectionID],
          isSyncing: true,
          syncError: false,
          syncedImage: null,
          updateOriginal: action.updateOriginal,
        },
      };
    case fileActions.LOAD_INTERACTIVE_STATE:
      return action.file.minimap
        ? action.file.minimap
        : {};
    case displayActions.RESET_IMAGE:
      return {
        ...state,
        [action.selectionID]: {
          ...state[action.selectionID],
          isSyncing: false,
          needSyncing: false,
          syncError: false,
          syncedImage: null,
          updateOriginal: false,
        },
      };
    case actions.SYNC_ERROR:
      return {
        ...state,
        [action.selectionID]: {
          ...state[action.selectionID],
          isSyncing: false,
          syncError: true,
          syncedImage: null,
          updateOriginal: false,
        },
      };
    case columnActions.SET_COLUMN_FILTER_ORDER:
      return {
        ...state,
        [action.selectionID]: {
          ...state[action.selectionID],
          isSyncing: false,
          needSyncing: true,
          syncedImage: null,
          updateOriginal: false,
        },
      };
    case rowActions.SET_ROW_FILTER_ORDER:
      return {
        ...state,
        [action.selectionID]: {
          ...state[action.selectionID],
          isSyncing: false,
          needSyncing: true,
          syncedImage: null,
          updateOriginal: false,
        },
      };
    case rowActions.SORT_ROWS:
      return {
        ...state,
        [action.selectionID]: {
          ...state[action.selectionID],
          isSyncing: false,
          needSyncing: true,
          syncedImage: null,
          updateOriginal: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
