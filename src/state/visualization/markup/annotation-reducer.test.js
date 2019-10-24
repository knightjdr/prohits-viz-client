import redcuer from './annotation-reducer';
import * as actions from './annotation-actions';
import * as fileActions from '../data/interactive-file-actions';

describe('Annotation reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(redcuer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_ANNOTATION action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        list: {
          a1: { position: { x: 0.2, y: 0.2 }, text: 'a' },
        },
      },
    };
    const action = {
      id: 'a2',
      position: { x: 0.5, y: 0.5 },
      selectionID: 'main',
      text: 'test annotation',
      type: actions.ADD_ANNOTATION,
    };
    const expectedState = {
      main: {
        ...currenState.main,
        list: {
          a1: { position: { x: 0.2, y: 0.2 }, text: 'a' },
          a2: { position: { x: 0.5, y: 0.5 }, text: 'test annotation' },
        },
      },
    };
    expect(redcuer(currenState, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_ALL_ANNOTATIONS action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        list: {
          a1: { position: { x: 0.2, y: 0.2 }, text: 'a' },
          a2: { position: { x: 0.5, y: 0.5 }, text: 'test annotation' },
        },
      },
    };
    const action = {
      selectionID: 'main',
      type: actions.CLEAR_ALL_ANNOTATIONS,
    };
    const expectedState = {
      main: {
        ...currenState.main,
        list: {},
      },
    };
    expect(redcuer(currenState, action)).toEqual(expectedState);
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

  it('should handle CHANGE_ANNOTATION_SETTING action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        show: true,
      },
    };
    const action = {
      selectionID: 'main',
      setting: 'color',
      type: actions.CHANGE_ANNOTATION_SETTING,
      value: '#ff0000',
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
      show: false,
      type: actions.TOGGLE_ANNOTATIONS,
    };
    const expectedState = {
      main: {
        ...currenState.main,
        show: false,
      },
    };
    expect(redcuer(currenState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_ANNOTATION_POSITION action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        list: {
          a1: { position: { x: 0.2, y: 0.2 }, text: 'a' },
          a2: { position: { x: 0.5, y: 0.5 }, text: 'test annotation' },
        },
      },
    };
    const newPosition = { x: 0.3, y: 0.3 };
    const action = {
      id: 'a1',
      position: newPosition,
      selectionID: 'main',
      type: actions.UPDATE_ANNOTATION_POSITION,
    };
    const expectedState = {
      main: {
        ...currenState.main,
        list: {
          a1: { position: { x: 0.3, y: 0.3 }, text: 'a' },
          a2: { position: { x: 0.5, y: 0.5 }, text: 'test annotation' },
        },
      },
    };
    expect(redcuer(currenState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_ANNOTATIONS action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        list: {
          a1: { position: { x: 0.2, y: 0.2 }, text: 'a' },
          a2: { position: { x: 0.5, y: 0.5 }, text: 'test annotation' },
        },
      },
    };
    const newList = {
      a1: { position: { x: 0.2, y: 0.2 }, text: 'a' },
    };
    const action = {
      list: newList,
      selectionID: 'main',
      type: actions.UPDATE_ANNOTATIONS,
    };
    const expectedState = {
      main: {
        ...currenState.main,
        list: newList,
      },
    };
    expect(redcuer(currenState, action)).toEqual(expectedState);
  });
});
