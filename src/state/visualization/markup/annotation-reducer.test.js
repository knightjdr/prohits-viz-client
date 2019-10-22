import redcuer from './annotation-reducer';
import * as actions from './annotation-actions';
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

  it('should handle SET_ANNOTATION_COLOR action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        showAnnotations: true,
      },
    };
    const action = {
      selectionID: 'main',
      color: '#ff0000',
      type: actions.SET_ANNOTATION_COLOR,
    };
    const expectedState = {
      main: {
        ...currenState.main,
        color: '#ff0000',
      },
    };
    expect(redcuer(currenState, action)).toEqual(expectedState);
  });

  it('should handle TOGGLE_ANNOTATIONS action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        show: true,
      },
    };
    const action = {
      selectionID: 'main',
      showAnnotations: false,
      type: actions.TOGGLE_ANNOTATIONS,
    };
    const expectedState = {
      main: {
        ...currenState.main,
        showAnnotations: false,
      },
    };
    expect(redcuer(currenState, action)).toEqual(expectedState);
  });
});
