import reducer from './export-reducer';
import * as actions from './export-actions';
import * as fileActions from '../data/interactive-file-actions';

describe('Export reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_EXPORT_IMAGE action', () => {
    const currentState = {
      error: false,
      exporting: false,
      file: 'file.txt',
      format: 'png',
    };
    const action = {
      type: actions.CLEAR_EXPORT_IMAGE,
    };
    const expectedState = {
      ...currentState,
      file: '',
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_STATE action', () => {
    const currentState = {
      error: false,
      exporting: false,
      file: 'file.txt',
      format: 'png',
    };
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_STATE,
    };
    const expectedState = {};
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle DOWNLOAD_EXPORT_IMAGE action', () => {
    const currentState = {
      error: false,
      exporting: true,
      file: '',
    };
    const action = {
      file: 'file.svg',
      type: actions.DOWNLOAD_EXPORT_IMAGE,
    };
    const expectedState = {
      ...currentState,
      error: false,
      exporting: false,
      file: 'file.svg',
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle EXPORT_ERROR action', () => {
    const currentState = {
      error: false,
      exporting: false,
      file: '',
    };
    const action = {
      type: actions.EXPORT_ERROR,
    };
    const expectedState = {
      ...currentState,
      error: true,
      exporting: false,
      file: '',
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle EXPORT_FORMAT action', () => {
    const currentState = {
      error: false,
      exporting: false,
      file: '',
      format: 'svg',
    };
    const action = {
      format: 'png',
      type: actions.EXPORT_FORMAT,
    };
    const expectedState = {
      ...currentState,
      format: 'png',
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle EXPORT_IMAGE action', () => {
    const currentState = {
      error: false,
      exporting: false,
      file: '',
    };
    const action = {
      type: actions.EXPORT_IMAGE,
    };
    const expectedState = {
      ...currentState,
      error: false,
      exporting: true,
      file: '',
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle LOAD_INTERACTIVE_STATE action', () => {
    const currentState = {};
    const action = {
      file: {
        exporter: {
          error: false,
          exporting: false,
          file: '',
          format: 'svg',
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      error: false,
      exporting: false,
      file: '',
      format: 'svg',
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});
