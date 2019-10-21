import reducer, { defaultState } from './tabs-reducer';
import * as fileActions from '../data/interactive-file-actions';

describe('Panel reducer', () => {
  it('should return default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  describe('file actions', () => {
    it('should handle CLEAR_INTERACTIVE_STATE action', () => {
      const action = {
        type: fileActions.CLEAR_INTERACTIVE_STATE,
      };
      const expectedState = defaultState;
      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle LOAD_INTERACTIVE_STATE action', () => {
      const action = {
        file: {
          tabs: {
            active: 'tab1',
            available: ['tab1', 'tab2'],
          },
        },
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = {
        active: 'tab1',
        available: ['tab1', 'tab2'],
      };
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});
