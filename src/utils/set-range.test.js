import setRange from './set-range';

let range;

beforeAll(() => {
  range = setRange(0, 50, 0, 100);
});

describe('Set range', () => {
  it('should return a function', () => {
    expect(typeof range).toBe('function');
  });

  it('should map in bounds numbers to output range', () => {
    const tests = [0, 10, 25, 40, 50];
    const expected = [0, 20, 50, 80, 100];
    tests.forEach((test, index) => {
      expect(range(test)).toBe(expected[index]);
    });
  });

  it('should round output number to nearest integer', () => {
    const tests = [0.2, 0.3, 25.73, 49.99];
    const expected = [0, 1, 51, 100];
    tests.forEach((test, index) => {
      expect(range(test)).toBe(expected[index]);
    });
  });

  it('should map out of bounds numbers to limits of output range', () => {
    const tests = [-1, 51];
    const expected = [0, 100];
    tests.forEach((test, index) => {
      expect(range(test)).toBe(expected[index]);
    });
  });
});
