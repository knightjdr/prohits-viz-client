import reorderArrayItem from './reorder-array-item';

describe('Reorder array item', () => {
  it('should move an array item to a new index', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const expected = ['a', 'c', 'd', 'b'];
    expect(reorderArrayItem(arr, 1, 3)).toEqual(expected);
  });
});
