import findFilterIndices from './find-filter-indices';

describe('Find filter indices', () => {
  it('should return column indices from names of columns to filter', () => {
    const columnDB = ['a', 'b', 'c', 'd'];
    const filterNames = ['b', 'c', 'e'];
    const expected = [1, 2];
    expect(findFilterIndices(columnDB, filterNames)).toEqual(expected);
  });
});
