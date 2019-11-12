import { reduceAndAddSnapshot, reduceAndRemoveSnapshot } from './snapshot-reducer';

describe('Add data for a snapshot', () => {
  it('should add data as value for snapshot name', () => {
    const action = {
      annotations: { color: '#ff0000' },
      name: 'snapshot2',
    };
    const property = 'annotations';
    const state = {
      snapshot1: { color: '#00fff00' },
    };

    const expected = {
      snapshot1: { color: '#00fff00' },
      snapshot2: { color: '#ff0000' },
    };

    expect(reduceAndAddSnapshot(state, action, property)).toEqual(expected);
  });

  it('should remove data for snapshot name', () => {
    const action = {
      name: 'snapshot2',
    };
    const state = {
      snapshot1: { color: '#00fff00' },
      snapshot2: { color: '#ff0000' },
      snapshot3: { color: '#ff00ff' },
    };

    const expected = {
      snapshot1: { color: '#00fff00' },
      snapshot3: { color: '#ff00ff' },
    };

    expect(reduceAndRemoveSnapshot(state, action)).toEqual(expected);
  });
});
