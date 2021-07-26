import formatReturnValue from './format-return-value';

describe('Format select dropdown return value', () => {
  describe('multiple === false', () => {
    it('should return a string when passed a string', () => {
      const multiple = false;
      const selectedValue = 'a';
      const expected = 'a';
      expect(formatReturnValue(multiple, selectedValue)).toBe(expected);
    });

    it('should return a string when passed an array', () => {
      const multiple = false;
      const selectedValue = ['a'];
      const expected = 'a';
      expect(formatReturnValue(multiple, selectedValue)).toBe(expected);
    });
  });

  describe('multiple === true', () => {
    it('should return an array when passed a string', () => {
      const multiple = true;
      const selectedValue = 'a';
      const expected = ['a'];
      expect(formatReturnValue(multiple, selectedValue)).toEqual(expected);
    });

    it('should return an array when passed an array', () => {
      const multiple = true;
      const selectedValue = ['a', 'b'];
      const expected = ['a', 'b'];
      expect(formatReturnValue(multiple, selectedValue)).toEqual(expected);
    });

    it('should return an empty array when passed an empty value (when clearing for example)', () => {
      const multiple = true;
      const selectedValue = '';
      const expected = [];
      expect(formatReturnValue(multiple, selectedValue)).toEqual(expected);
    });
  });
});
