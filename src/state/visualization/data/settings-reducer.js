import * as actions from './settings-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from './interactive-file-actions';

export const defaultState = {
  current: {},
  default: {},
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return {
        current: {},
        default: {},
      };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return {
        current: action.file.settings.current,
        default: action.file.settings.default,
      };
    case displayActions.RESET_IMAGE:
      return {
        ...state,
        current: {
          ...state.current,
          minAbundance: state.default.minAbundance,
          primaryFilter: state.default.primaryFilter,
        },
      };
    case actions.RESET_SETTINGS:
      return {
        ...state,
        current: { ...state.default },
      };
    case actions.UPDATE_SETTING:
      return {
        ...state,
        current: {
          ...state.current,
          [action.setting]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
