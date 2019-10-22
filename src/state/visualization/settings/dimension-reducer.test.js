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
        wrapperHeight: 0,
        wrapperWidth: 0,
      },
    };

    const action = {
      selectionID: 'main',
      dimensions: {
        columns: 40,
        height: 500,
        pageX: 30,
        pageY: 20,
        rows: 40,
        width: 500,
        wrapperHeight: 600,
        wrapperWidth: 600,
      },
      type: actions.SET_DIMENSIONS,
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
        wrapperHeight: 600,
        wrapperWidth: 600,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});
