import * as actions from './poi-actions';
import * as customizationActions from '../scatter/customization-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as pointsActions from '../scatter/points-actions';
import * as snapshotActions from '../data/snapshot-actions';

import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from '../data/snapshot-reducer';
import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndClearSelected = (state, action) => ({
  ...state,
  [action.snapshotID]: {
    ...state[action.snapshotID],
    points: [],
  },
});

const reduceAndReorder = (state, action) => {
  const numberPoi = Object.keys(action.points).length;
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
    case customizationActions.ADD_POINTS:
      return reduceAndReorder(state, action);
    case snapshotActions.ADD_SNAPSHOT:
      return reduceAndAddSnapshot(state, action, 'poi');
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'poi');
    case pointsActions.FILTER_POINTS:
      return reduceAndClearSelected(state, action);
    case actions.UPDATE_POI:
      return reduceAndUpdatePOI(state, action);
    case snapshotActions.REMOVE_SNAPSHOT:
      return reduceAndRemoveSnapshot(state, action);
    default:
      return state;
  }
};

export default reducer;
