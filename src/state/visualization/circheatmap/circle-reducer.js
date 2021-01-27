import * as actions from './circle-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndReset = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    hidden: [],
    order: state[action.snapshotID].defaultOrder,
  },
});

const reduceAndUpdateOrder = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    [action.key]: action.order,
  },
});

const reduceAndUpdateSetting = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    order: state[action.snapshotID].order.map((circle, index) => (
      index === action.index
        ? {
          ...circle,
          [action.attribute]: action.value,
        }
        : circle
    )),
  },
});

const reduceAndUpdateVisibility = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    hidden: action.hidden,
    order: action.order,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'circles');
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'circles');
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case displayActions.RESET_CIRCHEATMAP:
      return reduceAndReset(state, action);
    case actions.UPDATE_CIRCLE_ORDER:
      return reduceAndUpdateOrder(state, action);
    case actions.UPDATE_CIRCLE_SETTING:
      return reduceAndUpdateSetting(state, action);
    case actions.UPDATE_CIRCLE_VISIBILITY:
      return reduceAndUpdateVisibility(state, action);
    default:
      return state;
  }
};

export default reducer;
