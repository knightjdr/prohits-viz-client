import reducer from './parameter-reducer';
import * as fileActions from './interactive-file-actions';

describe('Parameters reducer', () => {
  it('should return an empty initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_STATE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_STATE,
    };
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOAD_INTERACTIVE_STATE action', () => {
    const action = {
      file: {
        parameters: {
          a: 'test1',
          b: 'test2',
          c: 'test3',
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      a: 'test1',
      b: 'test2',
      c: 'test3',
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
