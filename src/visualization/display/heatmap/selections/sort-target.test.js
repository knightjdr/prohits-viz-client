import sortTarget from './sort-target';

describe('Sort target list by a map object', () => {
  it('should sort when map is provided', () => {
    const map = { a: 1, b: 0, c: 2 };
    const target = ['c', 'b', 'a'];
    expect(sortTarget(target, map)).toEqual(['b', 'a', 'c']);
  });

  it('should not sort when map is not provided', () => {
    const target = ['c', 'b', 'a'];
    expect(sortTarget(target)).toEqual(['c', 'b', 'a']);
  });
});