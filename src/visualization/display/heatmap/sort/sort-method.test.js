import sortMethod, { sortPairByLocale } from './sort-method';

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
  it('should return a method for sorting rows by an index in ascending order by ref', () => {
    const func = sortMethod(0, 'asc', 1);
    expect(func(list[0], list[1])).toBe(-2.25);
  });

  it('should return a method for sorting rows by an index in ascending order by ref, and handle zeros', () => {
    const zeroList = [
      { data: [{ value: 1 }, { value: 0 }], name: 'a' },
      { data: [{ value: 5 }, { value: 0 }], name: 'b' },
      { data: [{ value: 2 }, { value: 3 }], name: 'c' },
    ];
    const func = sortMethod(0, 'asc', 1);
    expect(func(zeroList[0], zeroList[1])).toBe(-4000);
    expect(func(zeroList[0], zeroList[2])).toBeCloseTo(999.334, 2);
    expect(func(zeroList[2], zeroList[0])).toBeCloseTo(-999.334, 2);
  });

  it('should return a method for sorting rows by an index in ascending order', () => {
    const func = sortMethod(0, 'asc');
    expect(func(list[0], list[1])).toBe(-4);
  });

  it('should return a method for sorting rows by an index in descending order by ref', () => {
    const func = sortMethod(0, 'desc', 1);
    expect(func(list[0], list[1])).toBe(2.25);
  });

  it('should return a method for sorting rows by an index in descending order by ref, and handle zeros', () => {
    const zeroList = [
      { data: [{ value: 1 }, { value: 0 }], name: 'a' },
      { data: [{ value: 5 }, { value: 0 }], name: 'b' },
      { data: [{ value: 2 }, { value: 3 }], name: 'c' },
    ];
    const func = sortMethod(0, 'desc', 1);
    expect(func(zeroList[0], zeroList[1])).toBe(4000);
    expect(func(zeroList[0], zeroList[2])).toBeCloseTo(-999.334, 2);
    expect(func(zeroList[2], zeroList[0])).toBeCloseTo(999.334, 2);
  });

  it('should return a method for sorting rows by an index in descending order', () => {
    const func = sortMethod(0, 'desc');
    expect(func(list[0], list[1])).toBe(4);
  });
});
