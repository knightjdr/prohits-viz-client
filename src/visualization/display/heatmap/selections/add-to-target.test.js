import addToTarget from './add-to-target';

describe('Add items to target list', () => {
  it('should append to list', () => {
    const list = ['a', 'b'];
    const target = ['c'];
    expect(addToTarget(list, target)).toEqual(['c', 'a', 'b']);
  });

  it('should replace list', () => {
    const list = ['a', 'b'];
    const target = ['c'];
    expect(addToTarget(list, target, true)).toEqual(['a', 'b']);
  });
});
