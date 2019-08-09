import reducer, { defaultState } from './dimension-reducer';
import * as actions from './dimension-actions';

describe('Dimension reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SET_DIMENSIONS action', () => {
    const action = {
      columns: 40,
      height: 500,
      pageX: 30,
      pageY: 20,
      rows: 40,
      type: actions.SET_DIMENSIONS,
      width: 500,
    };
    const expectedState = {
      columns: 40,
      height: 500,
      pageX: 30,
      pageY: 20,
      rows: 40,
      width: 500,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
