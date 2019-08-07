import ParamsReducer, { defaultState } from './parameter-reducer';
import * as fileActions from './interactive-file-actions';

describe('ParamsReducer set reducer', () => {
  it('should return an empty initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(ParamsReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_FILE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_FILE,
    };
    const expectedState = defaultState;
    expect(ParamsReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle PARSE_INTERACTIVE_FILE action', () => {
    const action = {
      file: {
        parameters: {
          a: 'test1',
          b: 'test2',
          c: 'test3',
        },
      },
      type: fileActions.PARSE_INTERACTIVE_FILE,
    };
    const expectedState = {
      a: 'test1',
      b: 'test2',
      c: 'test3',
    };
    expect(ParamsReducer(undefined, action)).toEqual(expectedState);
  });
});
