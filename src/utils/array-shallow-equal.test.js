import { arrayShallowEqual, arrayShallowEqualExact } from './array-shallow-equal';

const arr1 = ['a', 'b', 'c'];
const arr2 = ['a', 'c', 'b'];
const arr3 = ['a', 'b', 'c', 'd'];
const arr4 = ['a', 'c', 'd'];

describe('arrayShallowEqual', () => {
  it('Identical arrays are equal', () => {
    expect(arrayShallowEqual(arr1, arr1)).toBeTruthy();
  });

  it('Arrays with the same entries in different orders are equal', () => {
    expect(arrayShallowEqual(arr1, arr2)).toBeTruthy();
  });

  it('Arrays with different lengths are not equal', () => {
    expect(arrayShallowEqual(arr1, arr3)).toBeFalsy();
  });

  it('Arrays the same length with different values are not equal', () => {
    expect(arrayShallowEqual(arr1, arr4)).toBeFalsy();
  });
});

describe('arrayShallowEqualExact', () => {
  it('Identical arrays are equal', () => {
    expect(arrayShallowEqualExact(arr1, arr1)).toBeTruthy();
  });

  it('Arrays with the same entries in different orders are not equal', () => {
    expect(arrayShallowEqualExact(arr1, arr2)).toBeFalsy();
  });

  it('Arrays with different lengths are not equal', () => {
    expect(arrayShallowEqualExact(arr1, arr3)).toBeFalsy();
  });

  it('Arrays the same length with different values are not equal', () => {
    expect(arrayShallowEqualExact(arr1, arr4)).toBeFalsy();
  });
});
