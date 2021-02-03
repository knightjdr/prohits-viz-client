import textLimits from './text-limits';

describe('Get coordinate position for labels on circheatmap', () => {
  describe('x coordinate', () => {
    it('should return negative radius when coordinate would lie outside plot', () => {
      const radius = 200;
      const textWidth = 20;
      const x = -201;

      const expected = -200;
      expect(textLimits.x(x, radius, textWidth)).toBe(expected);
    });

    it('should return radius minus text width when coordinate would lie outside plot', () => {
      const radius = 200;
      const textWidth = 20;
      const x = 181;

      const expected = 180;
      expect(textLimits.x(x, radius, textWidth)).toBe(expected);
    });

    it('should return input when within plot boundaries', () => {
      const radius = 200;
      const textWidth = 20;
      const x = 100;

      const expected = 100;
      expect(textLimits.x(x, radius, textWidth)).toBe(expected);
    });
  });

  describe('y coordinate', () => {
    describe('without offset for text', () => {
      it('should return negative radius when coordinate would lie outside plot', () => {
        const offset = false;
        const radius = 200;
        const textWidth = 20;
        const y = -201;

        const expected = -200;
        expect(textLimits.y(y, offset, radius, textWidth)).toBe(expected);
      });

      it('should return radius minus text width when coordinate would lie outside plot', () => {
        const offset = false;
        const radius = 200;
        const textWidth = 20;
        const y = 181;

        const expected = 180;
        expect(textLimits.y(y, offset, radius, textWidth)).toBe(expected);
      });

      it('should return input when within plot boundaries', () => {
        const offset = false;
        const radius = 200;
        const textWidth = 20;
        const y = 100;

        const expected = 100;
        expect(textLimits.y(y, offset, radius, textWidth)).toBe(expected);
      });
    });

    describe('with offset for text', () => {
      it('should return negative radius when coordinate would lie outside plot', () => {
        const offset = true;
        const radius = 200;
        const textWidth = 20;
        const y = -181;

        const expected = -200;
        expect(textLimits.y(y, offset, radius, textWidth)).toBe(expected);
      });

      it('should return radius minus text width when coordinate would lie outside plot', () => {
        const offset = true;
        const radius = 200;
        const textWidth = 20;
        const y = 201;

        const expected = 180;
        expect(textLimits.y(y, offset, radius, textWidth)).toBe(expected);
      });

      it('should return input minus offset when within plot boundaries', () => {
        const offset = true;
        const radius = 200;
        const textWidth = 20;
        const y = 100;

        const expected = 80;
        expect(textLimits.y(y, offset, radius, textWidth)).toBe(expected);
      });
    });
  });
});
