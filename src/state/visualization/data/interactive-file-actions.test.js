import * as actions from './interactive-file-actions';

describe('Interactive file actions', () => {
  it('should dispatch an action to clear the state', () => {
    const expectedAction = {
      type: actions.CLEAR_INTERACTIVE_STATE,
    };
    expect(actions.clearInteractiveState()).toEqual(expectedAction);
  });

  it('should dispatch an action to loase the state', () => {
    const expectedAction = {
      file: {},
      type: actions.LOAD_INTERACTIVE_STATE,
    };
    expect(actions.loadInteractiveState({})).toEqual(expectedAction);
  });
});
