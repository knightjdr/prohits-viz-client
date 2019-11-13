import * as actions from './gprofiler-actions';
import * as fileActions from '../data/interactive-file-actions';

import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndChangeSetting = (state, action) => ({
  ...state,
  [action.setting]: action.value,
});

const reduceAndChangeSettings = (state, action) => ({
  ...state,
  ...action.settings,
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.CHANGE_GPROFILER_SETTING:
      return reduceAndChangeSetting(state, action);
    case actions.CHANGE_GPROFILER_SETTINGS:
      return reduceAndChangeSettings(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'gprofiler');
    default:
      return state;
  }
};

export default reducer;
