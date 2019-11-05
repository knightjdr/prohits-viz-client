import defineFilteringColumnOrder from './define-filtering-column-order';

describe('Define filtering column order', () => {
  it('should return array of filtering indices when populated', () => {
    const defaultOrder = [0, 1, 2];
    const filterColumnIndices = [1, 2];
    const expected = filterColumnIndices;
    expect(defineFilteringColumnOrder(defaultOrder, filterColumnIndices)).toEqual(expected);
  });

  it('should return array default order when filtering indices not populated', () => {
    const defaultOrder = [0, 1, 2];
    const filterColumnIndices = [];
    const expected = defaultOrder;
    expect(defineFilteringColumnOrder(defaultOrder, filterColumnIndices)).toEqual(expected);
  });
});
