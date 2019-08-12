import { setRadius, setScore } from './page';

const range = jest.fn();
range.mockReturnValue(0);

describe('Set circle radius', () => {
  it('should return input radius when ratio is not a number', () => {
    expect(setRadius(undefined, 10)).toBe(10);
    expect(setRadius(null, 10)).toBe(10);
    expect(setRadius('a', 10)).toBe(10);
  });

  it('should return calculated radius when ratio is a number', () => {
    expect(setRadius(0, 10)).toBe(0);
    expect(setRadius(1, 10)).toBe(10);
    expect(setRadius(0.5, 10)).toBe(5);
  });
});

describe('Set circle score', () => {
  it('should return zero when score is not a number', () => {
    expect(setScore(undefined)).toBe(0);
    expect(setScore(null)).toBe(0);
    expect(setScore('a')).toBe(0);
  });

  it('should return calculated score when score is a number', () => {
    expect(setScore(0)).toBe(0);
    expect(setScore(1)).toBe(1);
    expect(setScore(0.5)).toBe(0.5);
  });
});
