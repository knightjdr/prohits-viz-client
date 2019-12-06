import reducer, { defaultState } from './save-reducer';
import * as actions from './save-actions';

describe('Save reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SET_SESSION_NAME action', () => {
    const currentState = {};
    const action = {
      name: 'session-1',
      type: actions.SET_SESSION_NAME,
    };
    const expectedState = {
      ...currentState,
      name: 'session-1',
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});
