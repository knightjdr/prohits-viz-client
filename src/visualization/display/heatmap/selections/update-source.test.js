import updateSource from './update-source';

describe('Update source list', () => {
  it('should remove item in list from source', () => {
    const list = ['b'];
    const source = ['a', 'b', 'c'];
    const expected = ['a', 'c'];
    expect(updateSource(list, source)).toEqual(expected);
  });

  it('should replace items in target and return to source', () => {
    const list = ['b', 'd'];
    const source = ['a', 'b', 'c'];
    const target = ['d', 'e'];
    const newTarget = ['b', 'd'];
    const expected = ['a', 'c', 'e'];
    expect(updateSource(list, source, target, newTarget, undefined, true)).toEqual(expected);
  });

  it('should replace items in target and return to source sorted', () => {
    const list = ['b', 'd'];
    const map = { a: 1, c: 2, e: 0 };
    const source = ['a', 'b', 'c'];
    const target = ['d', 'e'];
    const newTarget = ['b', 'd'];
    const expected = ['e', 'a', 'c'];
    expect(updateSource(list, source, target, newTarget, map, true)).toEqual(expected);
  });
});
