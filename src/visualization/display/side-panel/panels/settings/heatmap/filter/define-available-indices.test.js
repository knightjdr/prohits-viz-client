import defineAvailableIndices from './define-available-indices';

describe('Define available indices', () => {
  it('should remove indices that have been deleted', () => {
    const deleted = [1, 2];
    const indices = [0, 1, 2, 3];
    const expected = [0, 3];
    expect(defineAvailableIndices(indices, deleted)).toEqual(expected);
  });
});
