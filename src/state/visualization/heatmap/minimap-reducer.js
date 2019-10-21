import * as actions from './minimap-actions';
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
        [action.dataID]: {
          ...state[action.dataID],
          image: state[action.dataID].updateOriginal ? action.syncedImage : state[action.dataID].image,
          isSyncing: false,
          needSyncing: false,
          syncError: false,
          syncedImage: state[action.dataID].updateOriginal ? null : action.syncedImage,
          updateOriginal: false,
        },
      };
    case actions.MINIMAP_SYNCHRONIZING:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
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
        [action.dataID]: {
          ...state[action.dataID],
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
        [action.dataID]: {
          ...state[action.dataID],
          isSyncing: false,
          syncError: true,
          syncedImage: null,
          updateOriginal: false,
        },
      };
    case rowActions.FILTER_ROWS:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
          isSyncing: false,
          needSyncing: true,
          syncedImage: null,
          updateOriginal: false,
        },
      };
    case rowActions.SORT_ROWS:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
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
