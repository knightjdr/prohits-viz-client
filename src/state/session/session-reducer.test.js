import reducer from './session-reducer';
import SET_SESSION_ID from './session-actions';

describe('Session reducer', () => {
  it('should return default state', () => {
    expect(reducer(undefined, {})).toBeNull();
  });

  it('should handle SET_SESSION_ID', () => {
    const action = {
      id: 'abc',
      type: SET_SESSION_ID,
    };
    expect(reducer(undefined, action)).toBe('abc');
  });
});
