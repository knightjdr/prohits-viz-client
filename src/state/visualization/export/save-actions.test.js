import * as actions from './save-actions';

describe('Save actions', () => {
  it('should dispatch an action to set session name', () => {
    const name = 'session-1';
    const expectedAction = {
      name,
      type: actions.SET_SESSION_NAME,
    };
    expect(actions.setSessionName(name)).toEqual(expectedAction);
  });
});
