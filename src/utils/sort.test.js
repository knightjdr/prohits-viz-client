import sort from './sort';

describe('Sort', () => {
  it('should sort characters', () => {
    expect(sort.character('a', 'b')).toBe(-1);
    expect(sort.character('b', 'a')).toBe(1);
    expect(sort.character('a', 'a')).toBe(0);
    expect(sort.character('a', null)).toBe(-1);
    expect(sort.character(null, 'a')).toBe(1);
    expect(sort.character(null, null)).toBe(0);
    expect(sort.character(1, 'a')).toBe(-1);
    expect(sort.character('a', 1)).toBe(1);
    expect(sort.character(1, 2)).toBe(-1);
    expect(sort.character(2, 12)).toBe(1);
  });

  it('should sort dates', () => {
    expect(sort.date('1:13 pm, Feb 27, 2020', '1:12 pm, Feb 27, 2020')).toBeGreaterThan(0);
    expect(sort.date('1:13 pm, Feb 27, 2020', '1:13 pm, Feb 26, 2020')).toBeGreaterThan(0);
    expect(sort.date('1:13 pm, Mar 27, 2020', '1:13 pm, Feb 27, 2020')).toBeGreaterThan(0);
    expect(sort.date('1:12 pm, Feb 27, 2020', '1:13 pm, Feb 27, 2020')).toBeLessThan(0);
    expect(sort.date('1:13 pm, Feb 27, 2020', '1:13 pm, Mar 27, 2020')).toBeLessThan(0);
  });

  describe('Inner text', () => {
    it('should sort by first children string', () => {
      expect(sort.innerText({ props: { children: ['a'] } }, { props: { children: ['b'] } })).toBe(-1);
      expect(sort.innerText({ props: { children: ['b'] } }, { props: { children: [{}, 'a'] } })).toBe(1);
    });
  });

  it('should sort numbers', () => {
    expect(sort.numeric(1, 2)).toBe(-1);
    expect(sort.numeric(2, 1)).toBe(1);
    expect(sort.numeric(1, 1)).toBe(0);
    expect(sort.numeric(-1, -2)).toBe(1);
    expect(sort.numeric(-2, -1)).toBe(-1);
    expect(sort.numeric(1, null)).toBe(-1);
    expect(sort.numeric(null, 1)).toBe(1);
    expect(sort.numeric(null, null)).toBe(0);
    expect(sort.numeric(1, 'a')).toBe(-1);
    expect(sort.numeric('a', 1)).toBe(1);
    expect(sort.numeric('a', 'b')).toBe(0);
  });
});
