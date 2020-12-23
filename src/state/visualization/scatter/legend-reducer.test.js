import reducer from './legend-reducer';
import * as fileActions from '../data/interactive-file-actions';

describe('Legend reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = [];
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_STATE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_STATE,
    };
    const expectedState = [];
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle LOAD_INTERACTIVE_STATE action', () => {
    const action = {
      file: {
        legend: [
          { color: '#000000', text: 'text' },
        ],
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = [
      { color: '#000000', text: 'text' },
    ];
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
