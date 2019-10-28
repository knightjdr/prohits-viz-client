import findFocusIndex from './find-focus-index';

describe('Find index of dropdown option to focus', () => {
  it('should return 0 when no options are selected', () => {
    const options = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ];
    const selectedValues = [];
    const expected = 0;
    expect(findFocusIndex(options, selectedValues)).toBe(expected);
  });

  it('should return index of first selection option', () => {
    const options = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ];
    const selectedValues = ['b', 'a'];
    const expected = 1;
    expect(findFocusIndex(options, selectedValues)).toBe(expected);
  });
});
