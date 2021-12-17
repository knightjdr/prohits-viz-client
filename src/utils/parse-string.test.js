import parseString from './parse-string';

describe('parseString', () => {
  it('should return array of CSV-separated values with type text/csv', () => {
    const str = 'a,b,c';

    const expected = ['a', 'b', 'c'];
    expect(parseString(str, 'text/csv')).toEqual(expected);
  });

  it('should return array of tab-separated values with type text/plain', () => {
    const str = 'a\tb\tc';

    const expected = ['a', 'b', 'c'];
    expect(parseString(str, 'text/plain')).toEqual(expected);
  });

  it('should return array of tab-separated values with type text/tab-separated-values', () => {
    const str = 'a\tb\tc';

    const expected = ['a', 'b', 'c'];
    expect(parseString(str, 'text/tab-separated-values')).toEqual(expected);
  });

  it('should return array of tab-separated values when no type specified', () => {
    const str = 'a\tb\tc';

    const expected = ['a', 'b', 'c'];
    expect(parseString(str, '')).toEqual(expected);
  });
});
