import * as actions from './interactive-file-actions';

describe('Interactive file set actions', () => {
  it('should dispatch an action to clear the file', () => {
    const expectedAction = {
      type: actions.CLEAR_INTERACTIVE_FILE,
    };
    expect(actions.clearFile()).toEqual(expectedAction);
  });

  it('should dispatch an action to parse the file', () => {
    const expectedAction = {
      file: {},
      type: actions.PARSE_INTERACTIVE_FILE,
    };
    expect(actions.parseFile({})).toEqual(expectedAction);
  });
});
