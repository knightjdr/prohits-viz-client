import * as sort from './sort-table-content';

describe('Sort functions for table content', () => {
  it('should sort by number', () => {
    const tests = [
      { a: { content: 1 }, b: { content: 2 }, expected: -1 },
      { a: { content: 2 }, b: { content: 1 }, expected: 1 },
      { a: { content: 1 }, b: { content: 1 }, expected: 0 },
    ];
    tests.forEach((test) => {
      expect(sort.numeric(test.a, test.b)).toBe(test.expected);
    });
  });

  it('should sort by scientific notation', () => {
    const tests = [
      { a: { content: '1.00e-1' }, b: { content: '2.00e-1' }, expected: -0.1 },
      { a: { content: '2.00e-1' }, b: { content: '1.00e-1' }, expected: 0.1 },
      { a: { content: '1.00e-1' }, b: { content: '1.00e-1' }, expected: 0 },
    ];
    tests.forEach((test) => {
      expect(sort.sciNotation(test.a, test.b)).toBe(test.expected);
    });
  });

  it('should sort by number', () => {
    const tests = [
      { a: { content: 'a' }, b: { content: 'b' }, expected: -1 },
      { a: { content: 'b' }, b: { content: 'a' }, expected: 1 },
      { a: { content: 'a' }, b: { content: 'a' }, expected: 0 },
    ];
    tests.forEach((test) => {
      expect(sort.character(test.a, test.b)).toBe(test.expected);
    });
  });
});
