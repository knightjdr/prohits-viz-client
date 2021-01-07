import splitStringByCommaAndWhiteSpace from './split-comma-white-space';

describe('Split text by comma and white space', () => {
  it('should convert text to lowercase string, ignoring commas, newlines, quotes and newlines', () => {
    const text = ' a B  c\td\ne,f,,g, "h" \'i\' ,';
    const expected = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    expect(splitStringByCommaAndWhiteSpace(text)).toEqual(expected);
  });
});
