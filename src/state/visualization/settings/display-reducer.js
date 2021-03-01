import * as actions from './display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceSetting = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    [action.setting]: action.value,
  },
});

const reduceAndReset = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    ...action.value,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'display');
    case actions.CHANGE_CIRCHEATMAP_PLOT:
      return reduceSetting(state, action);
    case actions.CHANGE_SCATTER_PLOT:
      return reduceSetting(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'display');
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case actions.RESET_SCATTER:
      return reduceAndReset(state, action);
    case actions.RESET_SCATTER_TRANSFORMATIONS:
      return reduceAndReset(state, action);
    case actions.UPDATE_DISPLAY_SETTING:
      return reduceSetting(state, action);
    default:
      return state;
  }
};

export default reducer;
