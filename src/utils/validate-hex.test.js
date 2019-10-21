import validateHex from './validate-hex';

describe('Valid hex color', () => {
  it('should return input value for valid 6 digit hex colors', () => {
    const tests = [
      '#000000',
      '#ff0000',
      '#f44336',
      '#FFFFFF',
    ];
    tests.forEach((test) => {
      expect(validateHex(test)).toBe(test);
    });
  });

  it('should return input value for valid 3 digit hex colors', () => {
    const tests = [
      '#000000',
      '#f00',
      '#FFF',
    ];
    tests.forEach((test) => {
      expect(validateHex(test)).toBe(test);
    });
  });

  it('should return default for invalid hex colors', () => {
    const tests = [
      '000000',
      'asdfsadfas',
      '#f4',
      '#fffffff',
    ];
    tests.forEach((test) => {
      expect(validateHex(test)).toBe('#000000');
    });
  });

  it('should return argument default for invalid hex colors', () => {
    expect(validateHex('000000', '#000')).toBe('#000');
  });
});
