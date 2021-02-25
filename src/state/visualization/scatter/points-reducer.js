import * as actions from './points-actions';
import * as customizationActions from './customization-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndFilter = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    default: state[action.snapshotID].default,
    current: state[action.snapshotID].default.filter((point) => point.x >= action.x && point.y >= action.y),
  },
});

const reduceAndReset = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    default: state[action.snapshotID].default,
    current: state[action.snapshotID].default,
  },
});

const reduceAndReorder = (state, action) => {
  const firstGroup = [];
  const secondGroup = [];
  state[action.snapshotID].current.forEach((point) => {
    if (!action.points[point.label]) {
      firstGroup.push(point);
    } else {
      secondGroup.push(point);
    }
  });
  return {
    ...state,
    [action.snapshotID]: {
      default: state[action.snapshotID].default,
      current: [
        ...firstGroup,
        ...secondGroup,
      ],
    },
  };
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case customizationActions.ADD_POINTS:
      return reduceAndReorder(state, action);
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'points');
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case actions.FILTER_POINTS:
      return reduceAndFilter(state, action);
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'points');
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case displayActions.RESET_SCATTER:
      return reduceAndReset(state, action);
    default:
      return state;
  }
};

export default reducer;
