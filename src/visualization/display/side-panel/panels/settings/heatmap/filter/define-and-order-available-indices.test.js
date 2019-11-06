import defineAndOrderAvailableIndices from './define-and-order-available-indices';

describe('Define available indices', () => {
  it('should remove indices that have been deleted', () => {
    const defaultIndices = [0, 1, 2, 3];
    const deleted = [1, 2];
    const indices = [0, 1, 2, 3];
    const expected = [0, 3];
    expect(defineAndOrderAvailableIndices(defaultIndices, indices, deleted)).toEqual(expected);
  });

  it('should append default indices not in current indices array', () => {
    const defaultIndices = [0, 1, 2, 3, 4];
    const deleted = [1, 2];
    const indices = [2, 1, 3, 0];
    const expected = [3, 0, 4];
    expect(defineAndOrderAvailableIndices(defaultIndices, indices, deleted)).toEqual(expected);
  });
});
