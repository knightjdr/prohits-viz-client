import reducer from './row-db-reducer';
import * as fileActions from './interactive-file-actions';

describe('Row DB reducer', () => {
  it('should return an empty initial state', () => {
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

  describe('parse file', () => {
    it('should handle LOAD_INTERACTIVE_STATE action when columnDB field present', () => {
      const action = {
        file: {
          rowDB: [
            { name: 'a' },
            { name: 'b' },
            { name: 'c' },
          ],
        },
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = [
        { name: 'a' },
        { name: 'b' },
        { name: 'c' },
      ];
      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle LOAD_INTERACTIVE_STATE action when columnDB field missing', () => {
      const action = {
        file: {},
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = [];
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});
