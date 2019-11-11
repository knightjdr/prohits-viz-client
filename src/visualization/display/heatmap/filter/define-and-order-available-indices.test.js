import defineAndOrderAvailableIndices from './define-and-order-available-indices';

describe('Define available indices', () => {
  it('should return explicit order when defined', () => {
    const suppliedOrder = [0, 1, 2];
    const expected = suppliedOrder;
    expect(defineAndOrderAvailableIndices(suppliedOrder)).toEqual(expected);
  });

  it('should remove indices that have been deleted', () => {
    const suppliedOrder = null;
    const defaultIndices = [0, 1, 2, 3];
    const deleted = [1, 2];
    const storedIndices = [0, 1, 2, 3];
    const expected = [0, 3];
    expect(defineAndOrderAvailableIndices(suppliedOrder, defaultIndices, storedIndices, deleted)).toEqual(expected);
  });

  it('should append default indices not in current indices array', () => {
    const suppliedOrder = null;
    const defaultIndices = [0, 1, 2, 3, 4];
    const deleted = [1, 2];
    const storedIndices = [2, 1, 3, 0];
    const expected = [3, 0, 4];
    expect(defineAndOrderAvailableIndices(suppliedOrder, defaultIndices, storedIndices, deleted)).toEqual(expected);
  });
});
