import parseValue from './parse-value';

describe('Parse select dropdown input value', () => {
  it('should return an array of selected values when given an array', () => {
    const defaultValues = ['a', 'c'];
    const options = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ];
    const expected = ['a', 'c'];
    expect(parseValue(options, defaultValues)).toEqual(expected);
  });

  it('should return an array of selected values when given a string', () => {
    const defaultValues = 'a';
    const options = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ];
    const expected = ['a'];
    expect(parseValue(options, defaultValues)).toEqual(expected);
  });

  it('should remove default values not present in supplied options', () => {
    const defaultValues = ['d', 'c'];
    const options = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ];
    const expected = ['c'];
    expect(parseValue(options, defaultValues)).toEqual(expected);
  });
});
