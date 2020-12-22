import defineTicks, {
  calculateLinearTicks,
  calculateLogTicks,
  getLowerLogTick,
  getScaleFactor,
  getUpperLinearTick,
  getUpperLogTick,
} from './define-ticks';

describe('Define ticks', () => {
  describe('scale factor', () => {
    it('should set scale factor to one when less than 1.5', () => {
      const tests = [0.5, 1, 1.49];
      const expected = 1;
      tests.forEach((test) => {
        expect(getScaleFactor(test)).toBe(expected);
      });
    });

    it('should set scale factor using multipler when greater than or equal to 1.5', () => {
      const multipler = 2;
      const tests = [1.5, 2.4];

      const expected = [2, 4];
      tests.forEach((test, index) => {
        expect(getScaleFactor(test, multipler)).toBe(expected[index]);
      });
    });
  });

  describe('upper (max) linear tick', () => {
    it('should define tick', () => {
      const tests = [9.2, 62, 157];
      const expected = [10, 70, 200];
      tests.forEach((test, index) => {
        expect(getUpperLinearTick(test)).toBe(expected[index]);
      });
    });
  });

  describe('calculate linear ticks', () => {
    it('should return ticks when max is < 10', () => {
      const max = 9.2;
      const scale = 1;

      const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(calculateLinearTicks(max, scale)).toEqual(expected);
    });

    it('should return ticks when max is > 10 and < 100', () => {
      const max = 27;
      const scale = 1;

      const expected = [0, 10, 20, 30];
      expect(calculateLinearTicks(max, scale)).toEqual(expected);
    });

    it('should return ticks when max is > 100 and < 1000', () => {
      const max = 501;
      const scale = 1;

      const expected = [0, 100, 200, 300, 400, 500, 600];
      expect(calculateLinearTicks(max, scale)).toEqual(expected);
    });

    it('should return ticks relative to scale', () => {
      const max = 27;
      const scale = 1.5;

      const expected = [0, 5, 10, 15, 20, 25, 30];
      expect(calculateLinearTicks(max, scale)).toEqual(expected);
    });
  });

  describe('upper (max) log tick', () => {
    it('should define tick for base 2', () => {
      const tests = [1.5, 3, 12, 275];
      const expected = [2, 4, 16, 512];
      tests.forEach((test, index) => {
        expect(getUpperLogTick('2', test)).toBe(expected[index]);
      });
    });

    it('should define tick for base 10', () => {
      const tests = [1.5, 3, 12, 275];
      const expected = [10, 10, 100, 1000];
      tests.forEach((test, index) => {
        expect(getUpperLogTick('10', test)).toBe(expected[index]);
      });
    });
  });

  describe('lower (min) log tick', () => {
    it('should define tick for base 2', () => {
      const tests = [1, 1.25, 3];
      const expected = [0.125, 0.25, 1];
      tests.forEach((test, index) => {
        expect(getLowerLogTick('2', test)).toBe(expected[index]);
      });
    });

    it('should define tick for base 10', () => {
      const tests = [5, 20, 1];
      const expected = [0.1, 1, 0.01];
      tests.forEach((test, index) => {
        expect(getLowerLogTick('10', test)).toBe(expected[index]);
      });
    });
  });

  describe('calculate log ticks', () => {
    describe('base 2', () => {
      it('should return ticks when max is < 16', () => {
        const base = '2';
        const max = 9.2;
        const min = 1;
        const scale = 1;

        const expected = [0.125, 0.25, 0.5, 1, 2, 4, 8, 16];
        expect(calculateLogTicks(base, max, min, scale)).toEqual(expected);
      });

      it('should return ticks when max is > 16 and < 32', () => {
        const base = '2';
        const max = 27;
        const min = 2;
        const scale = 1;

        const expected = [1, 2, 4, 8, 16, 32];
        expect(calculateLogTicks(base, max, min, scale)).toEqual(expected);
      });

      it('should return ticks when max is > 32 and < 512', () => {
        const base = '2';
        const max = 501;
        const min = 2;
        const scale = 1;

        const expected = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
        expect(calculateLogTicks(base, max, min, scale)).toEqual(expected);
      });

      it('should return ticks relative to scale', () => {
        const base = '2';
        const max = 9.2;
        const min = 2;
        const scale = 2;

        const expected = [1, 1.5, 2, 3, 4, 6, 8, 12, 16];
        expect(calculateLogTicks(base, max, min, scale)).toEqual(expected);
      });
    });

    describe('base 10', () => {
      it('should return ticks when max is < 10', () => {
        const base = '10';
        const max = 9.2;
        const min = 1;
        const scale = 1;

        const expected = [0.01, 0.1, 1, 10];
        expect(calculateLogTicks(base, max, min, scale)).toEqual(expected);
      });

      it('should return ticks when max is > 10 and < 100', () => {
        const base = '10';
        const max = 27;
        const min = 2;
        const scale = 1;

        const expected = [0.1, 1, 10, 100];
        expect(calculateLogTicks(base, max, min, scale)).toEqual(expected);
      });

      it('should return ticks when max is > 100 and < 1000', () => {
        const base = '10';
        const max = 501;
        const min = 2;
        const scale = 1;

        const expected = [0.1, 1, 10, 100, 1000];
        expect(calculateLogTicks(base, max, min, scale)).toEqual(expected);
      });

      it('should return ticks relative to scale', () => {
        const base = '10';
        const max = 9.2;
        const min = 2;
        const scale = 2;

        const expected = [0.1, 0.5, 1, 5, 10];
        expect(calculateLogTicks(base, max, min, scale)).toEqual(expected);
      });
    });
  });

  describe('define ticks from data', () => {
    it('should define linear ticks', () => {
      const data = [
        { x: 1 },
        { x: 27 },
        { x: 16 },
      ];
      const options = {
        logBase: 'none',
        scale: 1,
        vertex: 'x',
      };

      const expected = [0, 10, 20, 30];
      expect(defineTicks(data, options)).toEqual(expected);
    });

    it('should define log base 2 ticks', () => {
      const data = [
        { x: 1 },
        { x: 27 },
        { x: 16 },
      ];
      const options = {
        logBase: '2',
        scale: 1,
        vertex: 'x',
      };

      const expected = [0.125, 0.25, 0.5, 1, 2, 4, 8, 16, 32];
      expect(defineTicks(data, options)).toEqual(expected);
    });

    it('should define log base 10 ticks', () => {
      const data = [
        { x: 1 },
        { x: 27 },
        { x: 16 },
      ];
      const options = {
        logBase: '10',
        scale: 1,
        vertex: 'x',
      };

      const expected = [0.01, 0.1, 1, 10, 100];
      expect(defineTicks(data, options)).toEqual(expected);
    });
  });
});
