import reducer from './dimension-reducer';
import * as actions from './dimension-actions';

describe('Dimension reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SET_DIMENSIONS action', () => {
    const currentState = {
      main: {
        columns: 0,
        height: 0,
        pageX: 0,
        pageY: 0,
        rows: 0,
        width: 0,
      },
    };

    const action = {
      columns: 40,
      dataID: 'main',
      height: 500,
      pageX: 30,
      pageY: 20,
      rows: 40,
      type: actions.SET_DIMENSIONS,
      width: 500,
    };
    const expectedState = {
      ...currentState,
      main: {
        columns: 40,
        height: 500,
        pageX: 30,
        pageY: 20,
        rows: 40,
        width: 500,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});
