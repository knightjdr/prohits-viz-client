import * as actions from './poi-actions';
import * as fileActions from '../data/interactive-file-actions';

const reduceAndUpdatePOI = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    ...action.poi,
  },
});

const reduceAndLoadState = file => (
  file.poi ? file.poi : {}
);

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action.file);
    case actions.UPDATE_POI:
      return reduceAndUpdatePOI(state, action);
    default:
      return state;
  }
};

export default reducer;
