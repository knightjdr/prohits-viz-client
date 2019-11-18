import * as actions from './panel-actions';
import * as fileActions from '../data/interactive-file-actions';

import { reduceAndClearState, reduceAndLoadState } from '../data/interactive-file-reducer';

const reduceAndChangeTab = (state, action) => ({
  ...state,
  tab: action.tab,
});

const reduceAndToggle = (state, action) => ({
  ...state,
  open: action.visible !== undefined ? action.visible : !state.open,
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.CHANGE_PANEL_TAB:
      return reduceAndChangeTab(state, action);
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return reduceAndClearState();
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoadState(action, 'panel');
    case actions.TOGGLE_PANEL:
      return reduceAndToggle(state, action);
    default:
      return state;
  }
};

export default reducer;
