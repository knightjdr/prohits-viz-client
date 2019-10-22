import * as actions from './settings-actions';
import * as displayActions from './display-actions';
import * as fileActions from '../data/interactive-file-actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_STATE:
      return {};
    case fileActions.LOAD_INTERACTIVE_STATE:
      return action.file.settings
        ? action.file.settings
        : {};
    case displayActions.RESET_IMAGE:
      return {
        ...state,
        [action.selectionID]: {
          ...state[action.selectionID],
          current: {
            ...state[action.selectionID].default,
          },
        },
      };
    case actions.UPDATE_SETTING:
      return {
        ...state,
        [action.selectionID]: {
          ...state[action.selectionID],
          current: {
            ...state[action.selectionID].current,
            [action.setting]: action.value,
          },
        },
      };
    case actions.UPDATE_SETTINGS:
      return {
        ...state,
        [action.selectionID]: {
          ...state[action.selectionID],
          current: {
            ...state[action.selectionID].current,
            ...action.settings,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
