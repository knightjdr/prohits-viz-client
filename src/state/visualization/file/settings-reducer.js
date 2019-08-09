import * as actions from './settings-actions';
import * as fileActions from './interactive-file-actions';

export const defaultState = {
  current: {},
  default: {},
  reset: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return {
        current: {},
        default: {},
        reset: false,
      };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return {
        current: action.file.settings.current,
        default: action.file.settings.default,
        reset: false,
      };
    case actions.RESET_SETTINGS:
      return {
        ...state,
        current: { ...state.default },
        reset: true,
      };
    case actions.UPDATE_SETTING:
      return {
        ...state,
        current: {
          ...state.current,
          [action.setting]: action.value,
        },
        reset: false,
      };
    default:
      return state;
  }
};

export default reducer;
