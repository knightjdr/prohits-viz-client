import * as fileActions from './interactive-file-actions';

import { reduceAndClearState, reduceAndLoadState } from './interactive-file-reducer';

const reducer = (state = [], action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState([]);
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'rowDB', []);
    default:
      return state;
  }
};

export default reducer;
