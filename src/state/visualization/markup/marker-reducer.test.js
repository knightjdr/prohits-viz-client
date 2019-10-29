import reducer from './marker-reducer';
import * as actions from './marker-actions';
import * as fileActions from '../data/interactive-file-actions';

describe('Marker reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_MARKER action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        list: {
          a1: { height: 20, width: 30, x: 0.1, y: 0.2 },
        },
      },
    };
    const action = {
      id: 'a2',
      dimensions: { height: 30, width: 100, x: 0.5, y: 0.3 },
      selectionID: 'main',
      type: actions.ADD_MARKER,
    };
    const expectedState = {
      main: {
        ...currenState.main,
        list: {
          a1: { height: 20, width: 30, x: 0.1, y: 0.2 },
          a2: { height: 30, width: 100, x: 0.5, y: 0.3 },
        },
      },
    };
    expect(reducer(currenState, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_ALL_MARKERS action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        list: {
          a1: { height: 20, width: 30, x: 0.1, y: 0.2 },
          a2: { height: 30, width: 100, x: 0.5, y: 0.3 },
        },
      },
    };
    const action = {
      selectionID: 'main',
      type: actions.CLEAR_ALL_MARKERS,
    };
    const expectedState = {
      main: {
        ...currenState.main,
        list: {},
      },
    };
    expect(reducer(currenState, action)).toEqual(expectedState);
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
        markers: {
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
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_MARKER_SETTING action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        show: true,
      },
    };
    const action = {
      selectionID: 'main',
      setting: 'color',
      type: actions.CHANGE_MARKER_SETTING,
      value: '#ff0000',
    };
    const expectedState = {
      main: {
        ...currenState.main,
        color: '#ff0000',
      },
    };
    expect(reducer(currenState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_MARKERS action', () => {
    const currenState = {
      main: {
        color: '#0000ff',
        list: {
          a1: { height: 20, width: 30, x: 0.1, y: 0.2 },
          a2: { height: 30, width: 100, x: 0.5, y: 0.3 },
        },
      },
    };
    const newList = {
      a1: { height: 20, width: 30, x: 0.1, y: 0.2 },
    };
    const action = {
      list: newList,
      selectionID: 'main',
      type: actions.UPDATE_MARKERS,
    };
    const expectedState = {
      main: {
        ...currenState.main,
        list: newList,
      },
    };
    expect(reducer(currenState, action)).toEqual(expectedState);
  });
});
