import * as actions from './readouts-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState } from '../data/interactive-file-reducer';

import { filterReadouts, sortReadouts } from './readouts-helpers';

const reduceAndChange = (state, action) => {
  const {
    circles,
    readouts,
    sortByKnown,
  } = action;
  const filtered = filterReadouts(readouts, circles, []);
  const sorted = sortReadouts(
    filtered,
    {
      byKnown: sortByKnown,
      maxReadouts: readouts.length,
      sortBy: circles[0]?.attribute,
    },
  );

  return {
    ...state,
    [action.snapshotID]: {
      default: action.readouts,
      current: sorted,
    },
  };
};

const reduceAndFilter = (state, action) => {
  const {
    circles,
    maxReadouts,
    readoutOrder,
    sortByKnown,
  } = action;
  const readouts = state[action.snapshotID].default;
  const filtered = filterReadouts(state[action.snapshotID].default, circles, readoutOrder);
  const sorted = sortReadouts(filtered, { byKnown: sortByKnown, maxReadouts, sortBy: circles[0]?.attribute });

  return {
    ...state,
    [action.snapshotID]: {
      default: readouts,
      current: sorted,
    },
  };
};

const reduceAndLoadState = (action) => {
  if (action.file.readouts) {
    return Object.entries(action.file.readouts).reduce((accum, [snapshot, readouts]) => {
      const { order: circles } = action.file.circles[snapshot];
      const { maxReadouts, readoutOrder, sortByKnown } = action.file.settings[snapshot].current;
      const filtered = filterReadouts(readouts.default, circles, readoutOrder);
      const sorted = sortReadouts(filtered, { byKnown: sortByKnown, maxReadouts, sortBy: circles[0]?.attribute });
      return {
        ...accum,
        [snapshot]: {
          current: sorted,
          default: sorted,
        },
      };
    }, {});
  }
  return {};
};

const reduceAndReset = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    default: state[action.snapshotID].default,
    current: state[action.snapshotID].default,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'readouts');
    case displayActions.CHANGE_CIRCHEATMAP_PLOT:
      return reduceAndChange(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case actions.FILTER_READOUTS:
      return reduceAndFilter(state, action);
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action);
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case displayActions.RESET_CIRCHEATMAP:
      return reduceAndReset(state, action);
    default:
      return state;
  }
};

export default reducer;
