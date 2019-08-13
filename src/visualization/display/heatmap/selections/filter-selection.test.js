import filterSelection from './filter-selection';

describe('Filter list', () => {
  it('should require gene in either source or target when replacing', () => {
    const list = ['a', 'd', 'g'];
    const source = ['a', 'b', 'c'];
    const target = ['d', 'e', 'f'];
    expect(filterSelection(list, source, target, true)).toEqual(['a', 'd']);
  });

  it('should require gene in source but not target when not replacing', () => {
    const list = ['a', 'd', 'g'];
    const source = ['a', 'b', 'c'];
    const target = ['d', 'e', 'f'];
    expect(filterSelection(list, source, target)).toEqual(['a']);
  });
});
