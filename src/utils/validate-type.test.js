import {
  validateArray,
  validateBoolean,
  validateNumber,
  validateObject,
  validateString,
} from './validate-type';

describe('Validate array', () => {
  it('should return a valid array', () => {
    expect(validateArray(['a'])).toEqual(['a']);
  });

  it('should return default for an invalid array', () => {
    expect(validateArray({})).toEqual([]);
  });

  it('should return argument default for an invalid array', () => {
    expect(validateArray({}, ['default'])).toEqual(['default']);
  });
});

describe('Validate boolean', () => {
  it('should return a valid boolean', () => {
    expect(validateBoolean(true)).toBeTruthy();
  });

  it('should return default for an invalid boolean', () => {
    expect(validateBoolean('true')).toBeFalsy();
  });

  it('should return argument default for an invalid boolean', () => {
    expect(validateBoolean('true', true)).toBeTruthy();
  });
});

describe('Validate number', () => {
  it('should return a valid number', () => {
    expect(validateNumber(1)).toBe(1);
  });

  it('should return default for an invalid number', () => {
    expect(validateNumber('1')).toBe(0);
  });

  it('should return argument default for an invalid number', () => {
    expect(validateNumber('1', 2)).toBe(2);
  });
});

describe('Validate object', () => {
  it('should return a valid object', () => {
    expect(validateArray({ a: 1 })).toEqual({ a: 1 });
  });

  it('should return default for an invalid object', () => {
    expect(validateArray([])).toEqual({});
  });

  it('should return argument default for an invalid object', () => {
    expect(validateArray([], { test: 'a' })).toEqual({ test: 'a' });
  });
});

describe('Validate string', () => {
  it('should return a valid string', () => {
    expect(validateString('test')).toBe('test');
  });

  it('should return default for an invalid string', () => {
    expect(validateString(1)).toBe('');
  });

  it('should return argument default for an invalid string', () => {
    expect(validateString(1, 'default')).toBe('default');
  });
});
