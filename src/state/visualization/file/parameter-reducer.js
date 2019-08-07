import * as fileActions from './interactive-file-actions';

export const defaultState = {
  abundanceColumn: '',
  filename: '',
  scoreColumn: '',
  scoreType: '',
};

const Parameters = (state = { ...defaultState }, action) => {
  switch (action.type) {
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return { ...defaultState };
    case fileActions.PARSE_INTERACTIVE_FILE:
      return { ...action.file.parameters };
    default:
      return state;
  }
};
export default Parameters;
