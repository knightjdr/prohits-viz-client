import reducer from './plots-reducer';
import * as fileActions from './interactive-file-actions';

describe('Plots reducer', () => {
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
    it('should handle LOAD_INTERACTIVE_STATE action when plots field present', () => {
      const action = {
        file: {
          plots: [
            {
              labels: { x: 'bait1', y: 'bait2' },
              points: [
                { label: 'gene1', x: 10, y: 15 },
              ],
            },
          ],
        },
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = [
        {
          labels: { x: 'bait1', y: 'bait2' },
          points: [
            { label: 'gene1', x: 10, y: 15 },
          ],
        },
      ];
      expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle LOAD_INTERACTIVE_STATE action when plots field missing', () => {
      const action = {
        file: {},
        type: fileActions.LOAD_INTERACTIVE_STATE,
      };
      const expectedState = [];
      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});
