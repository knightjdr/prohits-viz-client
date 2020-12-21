import reducer from './search-reducer';
import * as actions from './search-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

describe('Search status reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_SNAPSHOT action', () => {
    const currentState = {
      main: {
        columns: { a: 2, aa: 4 },
        match: true,
        rows: {},
        term: 'a',
      },
    };
    const snapshotState = {
      columns: {},
      match: false,
      rows: {},
      term: '',
    };
    const action = {
      searchStatus: snapshotState,
      name: 'snapshot-1',
      type: snapshotActions.ADD_SNAPSHOT,
    };
    const expectedState = {
      ...currentState,
      'snapshot-1': snapshotState,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_PLOT action', () => {
    const currenState = {
      main: {
        labels: { a: true, aa: true },
        match: true,
        term: 'a',
      },
    };
    const action = {
      snapshotID: 'main',
      type: displayActions.CHANGE_PLOT,
    };
    const expectedState = {
      main: {
        columns: {},
        labels: {},
        match: false,
        rows: {},
        term: '',
      },
    };
    expect(reducer(currenState, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_SEARCH action', () => {
    const currenState = {
      main: {
        columns: { a: true, aa: true },
        labels: { a: true, aa: true },
        match: true,
        rows: { aaa: true },
        term: 'a',
      },
    };
    const action = {
      snapshotID: 'main',
      type: actions.CLEAR_SEARCH,
    };
    const expectedState = {
      main: {
        columns: {},
        labels: {},
        match: false,
        rows: {},
        term: '',
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
        searchStatus: {
          main: {
            columns: { a: true, aa: true },
            match: true,
            rows: { aaa: true },
            term: 'a',
          },
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      main: {
        columns: { a: true, aa: true },
        match: true,
        rows: { aaa: true },
        term: 'a',
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_SNAPSHOT action', () => {
    const currentState = {
      main: {
        columns: { a: 2, aa: 4 },
        match: true,
        rows: {},
        term: 'a',
      },
      snapshot1: {
        columns: {},
        match: false,
        rows: {},
        term: '',
      },
    };
    const action = {
      name: 'snapshot1',
      type: snapshotActions.REMOVE_SNAPSHOT,
    };
    const expectedState = {
      main: {
        columns: { a: 2, aa: 4 },
        match: true,
        rows: {},
        term: 'a',
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SET_SEARCH_STATUS_HEATMAP action', () => {
    const currenState = {
      main: {
        columns: {},
        match: false,
        rows: {},
        term: '',
      },
    };
    const results = {
      columns: { a: true, aa: true },
      match: true,
      rows: { aaa: true },
    };
    const action = {
      results,
      snapshotID: 'main',
      term: 'a',
      type: actions.SET_SEARCH_STATUS_HEATMAP,
    };
    const expectedState = {
      main: {
        columns: { a: true, aa: true },
        match: true,
        rows: { aaa: true },
        term: 'a',
      },
    };
    expect(reducer(currenState, action)).toEqual(expectedState);
  });

  it('should handle SET_SEARCH_STATUS_SCATTER action', () => {
    const currenState = {
      main: {
        columns: {},
        labels: {},
        match: false,
        rows: {},
        term: '',
      },
    };
    const results = {
      labels: { a: true, aa: true },
      match: true,
    };
    const action = {
      results,
      snapshotID: 'main',
      term: 'a',
      type: actions.SET_SEARCH_STATUS_SCATTER,
    };
    const expectedState = {
      main: {
        labels: { a: true, aa: true },
        match: true,
        term: 'a',
      },
    };
    expect(reducer(currenState, action)).toEqual(expectedState);
  });
});
