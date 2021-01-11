import calculateCursorPosition from './calculate-cursor-position';

describe('Calculate cursor position', () => {
  it('should return absolute and relative position', () => {
    const e = {
      clientX: 100,
      clientY: 200,
    };
    const ref = {
      getBoundingClientRect: () => ({
        left: 20,
        top: 50,
      }),
    };

    const expected = {
      clientX: 100,
      clientY: 200,
      x: 80,
      y: 150,
    };
    expect(calculateCursorPosition(e, ref)).toEqual(expected);
  });
});
