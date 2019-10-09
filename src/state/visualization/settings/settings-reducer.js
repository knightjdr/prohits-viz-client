import * as actions from './settings-actions';
import * as displayActions from './display-actions';
import * as fileActions from '../data/interactive-file-actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return {};
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.settings
        ? action.file.settings
        : {};
    case displayActions.RESET_IMAGE:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
          current: {
            ...state[action.dataID].default,
          },
        },
      };
    case actions.UPDATE_SETTING:
      return {
        ...state,
        [action.dataID]: {
          ...state[action.dataID],
          current: {
            ...state[action.dataID].current,
            [action.setting]: action.value,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
