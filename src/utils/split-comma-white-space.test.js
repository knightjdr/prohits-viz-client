import splitStringByCommaAndWhiteSpace from './split-comma-white-space';

describe('Split text by comma and white space', () => {
  it('should convert text to lowercase string, ignoring commas, newlines, quotes and newlines', () => {
    const caseInsensitive = true;
    const text = ' a B  c\td\ne,f,,g, "h" \'i\' a,';
    const expected = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    expect(splitStringByCommaAndWhiteSpace(text, caseInsensitive)).toEqual(expected);
  });

  it('should not convert text to lowercase string, ignoring commas, newlines, quotes and newlines', () => {
    const caseInsensitive = false;
    const text = ' a B  c\td\ne,f,,g, "h" \'i\' a,';
    const expected = ['a', 'B', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    expect(splitStringByCommaAndWhiteSpace(text, caseInsensitive)).toEqual(expected);
  });
});
