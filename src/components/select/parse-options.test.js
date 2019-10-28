import parseOptions, { convertArrayElementsToObject } from './parse-options';

describe('Parse input options for dropdown', () => {
  describe('convert to array of objects', () => {
    it('should convert an array of strings', () => {
      const options = ['a', 'b', 'c'];
      const expected = [
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
        { label: 'c', value: 'c' },
      ];
      expect(convertArrayElementsToObject(options)).toEqual(expected);
    });

    it('should not convert an array of object', () => {
      const options = [
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
        { label: 'c', value: 'c' },
      ];
      const expected = [
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
        { label: 'c', value: 'c' },
      ];
      expect(convertArrayElementsToObject(options)).toEqual(expected);
    });
  });

  describe('parse options', () => {
    it('should return details about input options', () => {
      const options = [
        { label: 'optgroup 1', optGroup: true },
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
        { label: 'c', value: 'c' },
        { label: 'optgroup 2', optGroup: true },
        { label: 'd', value: 'd' },
      ];
      const expected = {
        height: 200,
        optionHeight: 35,
        options,
        selectableOptions: [
          { label: 'a', value: 'a' },
          { label: 'b', value: 'b' },
          { label: 'c', value: 'c' },
          { label: 'd', value: 'd' },
        ],
      };
      expect(parseOptions(options)).toEqual(expected);
    });

    it('should cap height at MAX_HEIGHT', () => {
      const options = [
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
        { label: 'c', value: 'c' },
        { label: 'd', value: 'd' },
        { label: 'e', value: 'e' },
        { label: 'f', value: 'f' },
        { label: 'g', value: 'g' },
        { label: 'h', value: 'h' },
        { label: 'i', value: 'i' },
        { label: 'j', value: 'j' },
        { label: 'k', value: 'k' },
      ];
      const expected = 350;
      expect(parseOptions(options).height).toEqual(expected);
    });
  });
});
