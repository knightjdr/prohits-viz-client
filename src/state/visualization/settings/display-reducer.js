import * as actions from './display-actions';
import * as fileActions from '../data/interactive-file-actions';

const reduceAndLoad = action => (
  action.file.display || {}
);

const reduceSetting = (state, action) => ({
  ...state,
  [action.selectionID]: {
    ...state[action.selectionID],
    [action.setting]: action.value,
  },
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case fileActions.LOAD_INTERACTIVE_STATE:
      return reduceAndLoad(action);
    case actions.UPDATE_DISPLAY_SETTING:
      return reduceSetting(state, action);
    default:
      return state;
  }
};

export default reducer;
