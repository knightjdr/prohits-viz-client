import ParseString from './parse-string';

describe('ParseString', () => {
  it('should return original string when no type specified', () => {
    const str = 'a,b,c';

    const expected = str;
    expect(ParseString(str)).toEqual(expected);
  });

  it('should return array of CSV-separated values with type text/csv', () => {
    const str = 'a,b,c';

    const expected = ['a', 'b', 'c'];
    expect(ParseString(str, 'text/csv')).toEqual(expected);
  });

  it('should return array of tab-separated values with type text/plain', () => {
    const str = 'a\tb\tc';

    const expected = ['a', 'b', 'c'];
    expect(ParseString(str, 'text/plain')).toEqual(expected);
  });

  it('should return array of tab-separated values with type text/tab-separated-values', () => {
    const str = 'a\tb\tc';

    const expected = ['a', 'b', 'c'];
    expect(ParseString(str, 'text/tab-separated-values')).toEqual(expected);
  });
});
