import redcuer from './annotation-reducer';
import * as fileActions from '../data/interactive-file-actions';

describe('Annotation reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(redcuer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_STATE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_STATE,
    };
    const expectedState = {};
    expect(redcuer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOAD_INTERACTIVE_STATE action', () => {
    const action = {
      file: {
        annotations: {
          main: {
            color: '#ff00000',
            show: false,
          },
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      main: {
        color: '#ff00000',
        show: false,
      },
    };
    expect(redcuer(undefined, action)).toEqual(expectedState);
  });
});
