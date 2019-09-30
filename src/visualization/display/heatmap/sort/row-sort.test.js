import rowSort, { sortPairByLocale } from './row-sort';

const list = [
  { data: [{ value: 1 }, { value: 4 }], name: 'a' },
  { data: [{ value: 5 }, { value: 2 }], name: 'b' },
  { data: [{ value: 2 }, { value: 3 }], name: 'c' },
];

describe('Sort by locale', () => {
  it('should sort by value when not zero', () => {
    expect(sortPairByLocale(1, 'a', 'b')).toBe(1);
  });

  it('should sort by input strings when value is zero', () => {
    expect(sortPairByLocale(0, 'a', 'b')).toBe(-1);
    expect(sortPairByLocale(0, 'b', '1')).toBe(1);
  });

  it('should sort case insensitive', () => {
    expect(sortPairByLocale(0, 'a', 'B')).toBe(-1);
    expect(sortPairByLocale(0, 'B', 'a')).toBe(1);
  });
});

describe('Row sort method', () => {
  it('should sort rows in ascending order by ref', () => {
    const order = [0, 1, 2];
    const expected = [0, 2, 1];
    expect(rowSort(list, order, 0, 'asc', 1)).toEqual(expected);
  });

  it('should sort rows in ascending order by ref, and handle zeros', () => {
    const zeroList = [
      { data: [{ value: 1 }, { value: 0 }], name: 'a' },
      { data: [{ value: 5 }, { value: 0 }], name: 'b' },
      { data: [{ value: 2 }, { value: 3 }], name: 'c' },
    ];
    const order = [0, 1, 2];
    const expected = [2, 0, 1];
    expect(rowSort(zeroList, order, 0, 'asc', 1)).toEqual(expected);
  });

  it('should sort rows in ascending order', () => {
    const order = [0, 1, 2];
    const expected = [0, 2, 1];
    expect(rowSort(list, order, 0, 'asc')).toEqual(expected);
  });

  it('should sort rows in descending order by ref', () => {
    const order = [0, 1, 2];
    const expected = [1, 2, 0];
    expect(rowSort(list, order, 0, 'desc', 1)).toEqual(expected);
  });

  it('should sort rows in descending order by ref, and handle zeros', () => {
    const zeroList = [
      { data: [{ value: 1 }, { value: 0 }], name: 'a' },
      { data: [{ value: 5 }, { value: 0 }], name: 'b' },
      { data: [{ value: 2 }, { value: 3 }], name: 'c' },
    ];
    const order = [0, 1, 2];
    const expected = [1, 0, 2];
    expect(rowSort(zeroList, order, 0, 'desc', 1)).toEqual(expected);
  });

  it('should sort rows in descending order', () => {
    const order = [0, 1, 2];
    const expected = [1, 2, 0];
    expect(rowSort(list, order, 0, 'desc')).toEqual(expected);
  });

  it('should sort filters rows in ascending order', () => {
    const order = [1, 2];
    const expected = [2, 1];
    expect(rowSort(list, order, 0, 'asc')).toEqual(expected);
  });
});
