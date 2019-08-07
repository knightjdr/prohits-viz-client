import * as actions from './settings-actions';
import * as fileActions from './interactive-file-actions';

export const defaultState = {};

const Settings = (state = {
  current: defaultState,
  default: defaultState,
  reset: false,
}, action) => {
  const updateState = {};
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return {
        current: defaultState,
        default: defaultState,
        reset: false,
      };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return {
        current: { ...action.file.settings.current },
        default: { ...defaultState },
        reset: false,
      };
    case actions.RESET_SETTINGS:
      return {
        ...state,
        current: { ...state.default },
        reset: true,
      };
    case actions.UPDATE_SETTING:
      updateState[action.setting] = action.value;
      return {
        ...state,
        current: {
          ...state.current,
          ...updateState,
        },
        reset: false,
      };
    default:
      return state;
  }
};
export default Settings;
