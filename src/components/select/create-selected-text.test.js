import createSelectedText from './create-selected-text';

describe('Select dropdown text', () => {
  it('should return a string of selected option labels', () => {
    const options = [
      { label: 'A', value: 'a' },
      { label: 'B', value: 'b' },
      { label: 'C', value: 'c' },
    ];
    const selectedValues = ['c', 'a', 'd'];
    const expected = 'C, A';
    expect(createSelectedText(options, selectedValues)).toBe(expected);
  });

  it('should return an empty string when no indices selected', () => {
    const options = [
      { label: 'a', value: 'a' },
      { label: 'b', value: 'b' },
      { label: 'c', value: 'b' },
    ];
    const selectedValues = [];
    const expected = '';
    expect(createSelectedText(options, selectedValues)).toBe(expected);
  });
});
