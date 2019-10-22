import * as actions from './display-actions';
import * as fileActions from '../data/interactive-file-actions';

export const defaultState = {
  plotFixed: false,
};

const reducer = (state = { ...defaultState }, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return { ...defaultState };
    case actions.FIX_PLOT:
      return {
        ...state,
        [action.selectionID]: {
          ...state[action.selectionID],
          plotFixed: action.fixed,
        },
      };
    case fileActions.LOAD_INTERACTIVE_STATE:
      return action.file.display || { ...defaultState };
    default:
      return state;
  }
};

export default reducer;
