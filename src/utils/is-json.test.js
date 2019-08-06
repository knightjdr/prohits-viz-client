import IsJson from './is-json';

describe('Is JSON', () => {
  it('should return json', () => {
    const json = {
      a: 'b',
      c: 'd',
    };
    const jsonString = '{"a": "b", "c": "d"}';
    expect(IsJson(jsonString)).toEqual(json);
  });

  it('should return false for non-exception-throwing cases with JSON.parse ', () => {
    expect(IsJson(false)).toBeFalsy();
    expect(IsJson(1234)).toBeFalsy();
    expect(IsJson(null)).toBeFalsy();
  });

  it('should return false for invalid json string', () => {
    const jsonString = '{"a": "b", "c": "d"';
    expect(IsJson(jsonString)).toBeFalsy();
  });
});
