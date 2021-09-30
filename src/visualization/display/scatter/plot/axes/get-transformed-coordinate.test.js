import { getTransformedXCoordinate, getTransformedYCoordinate } from './get-transformed-coordinate';

describe('Get transformed coordinate from an SVG matrix transform string', () => {
  describe('get x coordinate', () => {
    it('should return original value if there is no transform', () => {
      const transform = '';
      const x = 10;
      const y = 25;
      const expected = 10;
      expect(getTransformedXCoordinate(x, y, transform)).toBe(expected);
    });

    it('should transformed value', () => {
      const transform = 'matrix(-10.5, 17.6, 1, -8, 27, -460)';
      const x = 10;
      const y = 25;
      const expected = -53;
      expect(getTransformedXCoordinate(x, y, transform)).toBe(expected);
    });
  });

  describe('get y coordinate', () => {
    it('should return original value if there is no transform', () => {
      const transform = '';
      const x = 10;
      const y = 25;
      const expected = 25;
      expect(getTransformedYCoordinate(x, y, transform)).toBe(expected);
    });

    it('should transformed value', () => {
      const transform = 'matrix(-10.5, 17.6, 1, -8, 27, -460)';
      const x = 10;
      const y = 25;
      const expected = -484;
      expect(getTransformedYCoordinate(x, y, transform)).toBe(expected);
    });
  });
});
