import * as actions from './marker-actions';
import * as fileActions from '../data/interactive-file-actions';

const reduceAndAddMarker = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    list: {
      ...state[action.selectionID].list,
      [action.id]: {
        ...action.dimensions,
      },
    },
  },
});

const reduceAndClearMarkers = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    list: {},
  },
});

const reduceAndLoadState = file => (
  file.markers ? file.markers : {}
);

const reduceAndUpdateSetting = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    [action.setting]: action.value,
  },
});

const reduceAndUpdateList = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    list: action.list,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_MARKER:
      return reduceAndAddMarker(state, action);
    case actions.CHANGE_MARKER_SETTING:
      return reduceAndUpdateSetting(state, action);
    case actions.CLEAR_ALL_MARKERS:
      return reduceAndClearMarkers(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action.file);
    case actions.UPDATE_MARKERS:
      return reduceAndUpdateList(state, action);
    default:
      return state;
  }
};

export default reducer;
