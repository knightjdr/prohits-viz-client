import * as actions from './panel-actions';
import * as fileActions from '../data/interactive-file-actions';

export const defaultState = {
  open: true,
  tab: 'info',
};

const reducer = (state = { ...defaultState }, action) => {
  switch (action.type) {
    case actions.CHANGE_PANEL_TAB:
      return {
        ...state,
        tab: action.tab,
      };
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return { ...defaultState };
    case fileActions.LOAD_INTERACTIVE_STATE:
      return action.file.panel || { ...defaultState };
    case actions.TOGGLE_PANEL:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default reducer;
