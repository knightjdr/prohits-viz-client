import * as actions from './poi-actions';
import * as customizationActions from '../scatter/customization-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as pointsActions from '../scatter/points-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndClear = (state, action) => ({
  ...state,
  [action.snapshotID]: Object.keys(state[action.snapshotID]).reduce((accum, key) => ({
    [key]: [],
  }), {}),
});

const reduceAndReorder = (state, action) => {
  const numberPoi = action.groups[action.groups.length - 1].points.length;
  const newStart = action.noTotalPoints - numberPoi;
  return {
    ...state,
    [action.snapshotID]: {
      ...state[action.snapshotID],
      points: [...Array(numberPoi)].map((v, index) => newStart + index),
    },
  };
};

const reduceAndUpdatePOI = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    ...action.poi,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case customizationActions.ADD_GROUP:
      return reduceAndReorder(state, action);
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'poi');
    case displayActions.CHANGE_CIRCHEATMAP_PLOT:
      return reduceAndClear(state, action);
    case displayActions.CHANGE_SCATTER_PLOT:
      return reduceAndClear(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case pointsActions.FILTER_POINTS:
      return reduceAndClear(state, action);
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'poi');
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    case displayActions.RESET_CIRCHEATMAP:
      return reduceAndClear(state, action);
    case displayActions.RESET_SCATTER:
      return reduceAndClear(state, action);
    case actions.UPDATE_POI:
      return reduceAndUpdatePOI(state, action);
    default:
      return state;
  }
};

export default reducer;
