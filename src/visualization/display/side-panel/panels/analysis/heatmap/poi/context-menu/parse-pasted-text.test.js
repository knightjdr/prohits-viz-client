import parsePastedList from './parse-pasted-text';

describe('Parse pasted text', () => {
  it('should convert text to lowercase string, ignoring commas, newlines, quotes and newlines', () => {
    const text = ' a B  c\td\ne,f,,g, "h" \'i\' ,';
    const expected = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    expect(parsePastedList(text)).toEqual(expected);
  });
});
