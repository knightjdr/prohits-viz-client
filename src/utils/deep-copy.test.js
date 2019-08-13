import md5 from 'md5';

import deepCopy from './deep-copy';

const testValues = {
  arr: [1, 'a', null],
  obj: { a: 1, b: 'x' },
  arrObj: [
    { a: 1, b: 'x' },
    { a: 1, b: [1, 'a', null] },
  ],
};
const md5Expected = {
  arr: md5(testValues.arr),
  obj: md5(testValues.obj),
  arrObj: md5(testValues.arrObj),
};

describe('Deep copy', () => {
  it('should copy null', () => {
    expect(deepCopy(null)).toBeNull();
  });

  it('should copy empty string as null', () => {
    expect(deepCopy('')).toBeNull();
  });

  it('should copy array', () => {
    expect(md5(deepCopy(testValues.arr))).toBe(md5Expected.arr);
  });

  it('should copy object', () => {
    expect(md5(deepCopy(testValues.obj))).toBe(md5Expected.obj);
  });

  it('should copy array of objects', () => {
    expect(md5(deepCopy(testValues.arrObj))).toBe(md5Expected.arrObj);
  });
});
