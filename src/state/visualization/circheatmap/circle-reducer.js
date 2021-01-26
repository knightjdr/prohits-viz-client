import * as actions from './circle-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndUpdateOrder = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    order: action.order,
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
    case actions.UPDATE_CIRCLE_ORDER:
      return reduceAndUpdateOrder(state, action);
    case actions.UPDATE_CIRCLE_SETTING:
      return reduceAndUpdateSetting(state, action);
    default:
      return state;
  }
};

export default reducer;
