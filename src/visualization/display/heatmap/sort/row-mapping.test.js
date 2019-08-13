import rowMapping from './row-mapping';

describe('Row mapping', () => {
  let rows;
  beforeAll(() => {
    const currRows = ['a', 'c'];
    const sortedList = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];
    rows = rowMapping(currRows, sortedList);
  });

  it('should create an array of row names filtered by curr row list', () => {
    expect(rows.list).toEqual(['a', 'c']);
  });

  it('should create a map of rowNames to indices', () => {
    expect(rows.mapped).toEqual({ a: 0, c: 1 });
  });
});
