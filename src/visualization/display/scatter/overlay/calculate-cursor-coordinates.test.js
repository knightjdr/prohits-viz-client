import calculateCursorCoordinates from './calculate-cursor-coordinates';

describe('Calculate cursor coordinates for scatter overlay', () => {
  it('should calculate x y coordinates relative to window', () => {
    const e = { clientX: 200, clientY: 300 };
    const options = {
      ref: {
        getBoundingClientRect: () => ({
          left: 100,
          top: 150,
        }),
      },
      scale: 2,
    };

    const expected = { x: 50, y: 75 };
    expect(calculateCursorCoordinates(e, options)).toEqual(expected);
  });
});
