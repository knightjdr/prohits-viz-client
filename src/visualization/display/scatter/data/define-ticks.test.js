import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';

import defineTicks, {
  calculateLinearTicks,
  calculateLogTicks,
  getScaleFactor,
} from './define-ticks';

expect.extend({ toBeDeepCloseTo });

describe('Define ticks', () => {
  describe('scale factor', () => {
    it('should set scale factor to one when less than 1.5', () => {
      const tests = [0.5, 1, 1.49];
      const expected = 1;
      tests.forEach((test) => {
        expect(getScaleFactor(test)).toBe(expected);
      });
    });

    it('should set scale factor using multiplier when greater than or equal to 1.5', () => {
      const multiplier = 2;
      const tests = [1.5, 2.4];

      const expected = [2, 4];
      tests.forEach((test, index) => {
        expect(getScaleFactor(test, multiplier)).toBe(expected[index]);
      });
    });
  });

  describe('calculate linear ticks', () => {
    describe('non-negative ticks', () => {
      it('should return ticks when max is 10', () => {
        const axisBoundaries = {
          max: 10,
          min: 0,
        };
        const scale = 1;

        const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(calculateLinearTicks(axisBoundaries, scale)).toEqual(expected);
      });

      it('should return ticks when max is > 10 and < 100', () => {
        const axisBoundaries = {
          max: 30,
          min: 0,
        };
        const scale = 1;

        const expected = [0, 10, 20, 30];
        expect(calculateLinearTicks(axisBoundaries, scale)).toEqual(expected);
      });

      it('should return ticks when max is > 100 and < 1000', () => {
        const axisBoundaries = {
          max: 600,
          min: 0,
        };
        const scale = 1;

        const expected = [0, 100, 200, 300, 400, 500, 600];
        expect(calculateLinearTicks(axisBoundaries, scale)).toEqual(expected);
      });

      it('should return ticks relative to scale', () => {
        const axisBoundaries = {
          max: 30,
          min: 0,
        };
        const scale = 1.5;

        const expected = [0, 5, 10, 15, 20, 25, 30];
        expect(calculateLinearTicks(axisBoundaries, scale)).toEqual(expected);
      });
    });

    describe('negative ticks', () => {
      it('should return ticks for only negative values', () => {
        const axisBoundaries = {
          max: 0,
          min: -20,
        };
        const scale = 1;

        const expected = [-20, -10, 0];
        expect(calculateLinearTicks(axisBoundaries, scale)).toEqual(expected);
      });

      it('should return ticks relative to scale', () => {
        const axisBoundaries = {
          max: 0,
          min: -20,
        };
        const scale = 1.5;

        const expected = [-20, -15, -10, -5, 0];
        expect(calculateLinearTicks(axisBoundaries, scale)).toEqual(expected);
      });
    });

    describe('positive and negative ticks', () => {
      it('should return ticks when max is positive and min is negative', () => {
        const axisBoundaries = {
          max: 30,
          min: -10,
        };
        const scale = 1;

        const expected = [-10, 0, 10, 20, 30];
        expect(calculateLinearTicks(axisBoundaries, scale)).toEqual(expected);
      });

      it('should return ticks when absolute value of min is greater than max', () => {
        const axisBoundaries = {
          max: 10,
          min: -20,
        };
        const scale = 1;

        const expected = [-20, -10, 0, 10];
        expect(calculateLinearTicks(axisBoundaries, scale)).toEqual(expected);
      });

      it('should return ticks relative to scale', () => {
        const axisBoundaries = {
          max: 30,
          min: -10,
        };
        const scale = 1.5;

        const expected = [-10, -5, 0, 5, 10, 15, 20, 25, 30];
        expect(calculateLinearTicks(axisBoundaries, scale)).toEqual(expected);
      });
    });
  });

  describe('calculate log ticks', () => {
    describe('base 2', () => {
      it('should return ticks when max is 16', () => {
        const axisBoundaries = {
          max: 16,
          min: 1,
        };
        const base = '2';
        const scale = 1;

        const expected = [1, 2, 4, 8, 16];
        expect(calculateLogTicks(axisBoundaries, base, scale)).toEqual(expected);
      });

      it('should return ticks relative to scale', () => {
        const axisBoundaries = {
          max: 16,
          min: 1,
        };
        const base = '2';
        const scale = 2;

        const expected = [1, 1.5, 2, 3, 4, 6, 8, 12, 16];
        expect(calculateLogTicks(axisBoundaries, base, scale)).toEqual(expected);
      });

      it('should handle only negative ticks', () => {
        const axisBoundaries = {
          max: -1,
          min: -16,
        };
        const base = '2';
        const scale = 1;

        const expected = [-16, -8, -4, -2, -1];
        expect(calculateLogTicks(axisBoundaries, base, scale)).toEqual(expected);
      });

      it('should return negative ticks relative to scale', () => {
        const axisBoundaries = {
          max: -1,
          min: -16,
        };
        const base = '2';
        const scale = 2;

        const expected = [-16, -12, -8, -6, -4, -3, -2, -1.5, -1];
        expect(calculateLogTicks(axisBoundaries, base, scale)).toEqual(expected);
      });

      it('should handle positive and negative ticks', () => {
        const axisBoundaries = {
          max: 16,
          min: -8,
        };
        const base = '2';
        const scale = 1;

        const expected = [-8, -4, -2, -1, -0.5, 0.5, 1, 2, 4, 8, 16];
        expect(calculateLogTicks(axisBoundaries, base, scale)).toEqual(expected);
      });

      it('should return positive and negative ticks relative to scale', () => {
        const axisBoundaries = {
          max: 16,
          min: -8,
        };
        const base = '2';
        const scale = 2;

        const expected = [
          -8, -6, -4, -3, -2, -1.5, -1, -0.75, -0.5, -0.375, -0.25,
          0.25, 0.375, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8, 12, 16,
        ];
        expect(calculateLogTicks(axisBoundaries, base, scale)).toBeDeepCloseTo(expected, 3);
      });
    });

    describe('base 10', () => {
      it('should return ticks when max is 10', () => {
        const axisBoundaries = {
          max: 10,
          min: 0.1,
        };
        const base = '10';
        const scale = 1;

        const expected = [0.1, 1, 10];
        expect(calculateLogTicks(axisBoundaries, base, scale)).toEqual(expected);
      });

      it('should return ticks relative to scale', () => {
        const axisBoundaries = {
          max: 10,
          min: 0.1,
        };
        const base = '10';
        const scale = 2;

        const expected = [0.1, 0.5, 1, 5, 10];
        expect(calculateLogTicks(axisBoundaries, base, scale)).toEqual(expected);
      });

      it('should handle only negative ticks', () => {
        const axisBoundaries = {
          max: -0.1,
          min: -10,
        };
        const base = '10';
        const scale = 1;

        const expected = [-10, -1, -0.1];
        expect(calculateLogTicks(axisBoundaries, base, scale)).toEqual(expected);
      });

      it('should handle positive and negative ticks', () => {
        const axisBoundaries = {
          max: 10,
          min: -10,
        };
        const base = '10';
        const scale = 1;

        const expected = [-10, -1, -0.1, 0.1, 1, 10];
        expect(calculateLogTicks(axisBoundaries, base, scale)).toBeDeepCloseTo(expected, 3);
      });

      it('should handle positive and negative ticks relative to scale', () => {
        const axisBoundaries = {
          max: 10,
          min: -10,
        };
        const base = '10';
        const scale = 2;

        const expected = [
          -10, -5, -1, -0.5, -0.1, -0.05, -0.01,
          0.01, 0.05, 0.1, 0.5, 1, 5, 10,
        ];
        expect(calculateLogTicks(axisBoundaries, base, scale)).toBeDeepCloseTo(expected, 3);
      });
    });
  });

  describe('define ticks from data', () => {
    it('should define linear ticks when base is "none"', () => {
      const axisBoundaries = {
        max: 30,
        min: 0,
      };
      const options = {
        logAxis: 'none',
        scale: 1,
      };

      const expected = [0, 10, 20, 30];
      expect(defineTicks(axisBoundaries, options)).toEqual(expected);
    });

    it('should define log base 2 ticks', () => {
      const axisBoundaries = {
        max: 32,
        min: 0.5,
      };
      const options = {
        logAxis: '2',
        scale: 1,
      };

      const expected = [0.5, 1, 2, 4, 8, 16, 32];
      expect(defineTicks(axisBoundaries, options)).toEqual(expected);
    });

    it('should define log base 10 ticks', () => {
      const axisBoundaries = {
        max: 100,
        min: 0.1,
      };
      const options = {
        logAxis: '10',
        scale: 1,
      };

      const expected = [0.1, 1, 10, 100];
      expect(defineTicks(axisBoundaries, options)).toEqual(expected);
    });
  });
});
