import shouldDisable from './should-disable';

describe('Nav-control button opacity', () => {
  describe('up controls', () => {
    it('should be true when y is zero', () => {
      const opacity = shouldDisable({ x: 0, y: 0 }, 'y', 10, 5);
      expect(opacity.up).toBeTruthy();
    });

    it('should be false when y is not zero', () => {
      const opacity = shouldDisable({ x: 0, y: 1 }, 'y', 10, 5);
      expect(opacity.up).toBeFalsy();
    });
  });

  describe('down controls', () => {
    it('should be true when y is within one page of end', () => {
      const opacity = shouldDisable({ x: 0, y: 5 }, 'y', 10, 5);
      expect(opacity.down).toBeTruthy();
    });

    it('should be false when y is not within one page of end', () => {
      const opacity = shouldDisable({ x: 0, y: 1 }, 'y', 10, 5);
      expect(opacity.down).toBeFalsy();
    });
  });
});
