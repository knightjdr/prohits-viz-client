import defineAxisBoundaries from './define-axis-boundaries';

describe('Define axis boundaries', () => {
  describe('linear axes', () => {
    describe('non-negative data', () => {
      it('should define suitable min/max', () => {
        const data = [
          { x: 5, y: 17 },
          { x: 45, y: 127 },
          { x: 23, y: 11 },
        ];
        const options = {
          equalScaleAxes: false,
          logX: 'none',
          logY: 'none',
        };

        const expected = {
          x: { min: 0, max: 50 },
          y: { min: 0, max: 200 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });

      it('should define suitable min/max for equal scale axes', () => {
        const data = [
          { x: 5, y: 17 },
          { x: 45, y: 127 },
          { x: 23, y: 11 },
        ];
        const options = {
          equalScaleAxes: true,
          logX: 'none',
          logY: 'none',
        };

        const expected = {
          x: { min: 0, max: 200 },
          y: { min: 0, max: 200 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });
    });

    describe('negative data', () => {
      it('should define suitable min/max', () => {
        const data = [
          { x: -5, y: -17 },
          { x: -45, y: -127 },
          { x: -23, y: -11 },
        ];
        const options = {
          equalScaleAxes: false,
          logX: 'none',
          logY: 'none',
        };

        const expected = {
          x: { min: -50, max: 0 },
          y: { min: -200, max: 0 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });

      it('should define suitable min/max for equal scale axes', () => {
        const data = [
          { x: -5, y: -17 },
          { x: -45, y: -127 },
          { x: -23, y: -11 },
        ];
        const options = {
          equalScaleAxes: true,
          logX: 'none',
          logY: 'none',
        };

        const expected = {
          x: { min: -200, max: 0 },
          y: { min: -200, max: 0 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });
    });

    describe('positive and negative data', () => {
      it('should define suitable min/max', () => {
        const data = [
          { x: 5, y: 17 },
          { x: 45, y: 127 },
          { x: -23, y: -11 },
        ];
        const options = {
          equalScaleAxes: false,
          logX: 'none',
          logY: 'none',
        };

        const expected = {
          x: { min: -30, max: 50 },
          y: { min: -100, max: 200 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });

      it('should define suitable min/max for equal scale axes', () => {
        const data = [
          { x: 5, y: 17 },
          { x: 45, y: 127 },
          { x: -23, y: -11 },
        ];
        const options = {
          equalScaleAxes: true,
          logX: 'none',
          logY: 'none',
        };

        const expected = {
          x: { min: -100, max: 200 },
          y: { min: -100, max: 200 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });

      it('should define suitable min/max when negative and positive values are on different scales', () => {
        const data = [
          { x: 5, y: 17 },
          { x: 45, y: 527 },
          { x: -123, y: -11 },
        ];
        const options = {
          equalScaleAxes: false,
          logX: 'none',
          logY: 'none',
        };

        const expected = {
          x: { min: -200, max: 100 },
          y: { min: -100, max: 600 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });
    });
  });

  describe('log axes', () => {
    describe('non-negative data', () => {
      it('should define suitable min/max', () => {
        const data = [
          { x: 5, y: 17 },
          { x: 45, y: 127 },
          { x: 23, y: 0.6 },
        ];
        const options = {
          equalScaleAxes: false,
          logX: '2',
          logY: '10',
        };

        const expected = {
          x: { min: 0.5, max: 64 },
          y: { min: 0.1, max: 1000 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });

      it('should define suitable min/max for small data values', () => {
        const data = [
          { x: 5, y: 17 },
          { x: 45, y: 127 },
          { x: 0, y: 0.6 },
          { x: 10, y: 0 },
          { x: 0.13, y: 10 },
        ];
        const options = {
          equalScaleAxes: false,
          logX: '2',
          logY: '10',
        };

        const expected = {
          x: { min: 0.125, max: 64 },
          y: { min: 0.1, max: 1000 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });

      it('should define suitable min/max for equal scale axes', () => {
        const data = [
          { x: 5, y: 17 },
          { x: 45, y: 127 },
          { x: 23, y: 0.6 },
        ];
        const options = {
          equalScaleAxes: true,
          logX: '2',
          logY: '2',
        };

        const expected = {
          x: { min: 0.5, max: 128 },
          y: { min: 0.5, max: 128 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });
    });

    describe('negative data', () => {
      it('should define suitable min/max', () => {
        const data = [
          { x: -5, y: -17 },
          { x: -45, y: -127 },
          { x: -23, y: -0.6 },
        ];
        const options = {
          equalScaleAxes: false,
          logX: '2',
          logY: '10',
        };

        const expected = {
          x: { min: -64, max: -0.5 },
          y: { min: -1000, max: -0.1 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });

      it('should define suitable min/max for small data values', () => {
        const data = [
          { x: -5, y: -17 },
          { x: -45, y: -127 },
          { x: 0, y: -0.6 },
          { x: -10, y: 0 },
          { x: -0.13, y: -10 },
        ];
        const options = {
          equalScaleAxes: false,
          logX: '2',
          logY: '10',
        };

        const expected = {
          x: { min: -64, max: -0.125 },
          y: { min: -1000, max: -0.1 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });

      it('should define suitable min/max for equal scale axes', () => {
        const data = [
          { x: -5, y: -17 },
          { x: -45, y: -127 },
          { x: -23, y: -0.6 },
        ];
        const options = {
          equalScaleAxes: true,
          logX: '2',
          logY: '2',
        };

        const expected = {
          x: { min: -128, max: -0.5 },
          y: { min: -128, max: -0.5 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });
    });

    describe('positive and negative data', () => {
      it('should define suitable min/max', () => {
        const data = [
          { x: -5, y: 17 },
          { x: 45, y: -127 },
          { x: 23, y: 0.6 },
        ];
        const options = {
          equalScaleAxes: false,
          logX: '2',
          logY: '10',
        };

        const expected = {
          x: { min: -8, max: 64 },
          y: { min: -1000, max: 100 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });

      it('should define suitable min/max for equal scale axes', () => {
        const data = [
          { x: -5, y: 17 },
          { x: 45, y: -127 },
          { x: 23, y: 0.6 },
        ];
        const options = {
          equalScaleAxes: true,
          logX: '2',
          logY: '2',
        };

        const expected = {
          x: { min: -128, max: 64 },
          y: { min: -128, max: 64 },
        };
        expect(defineAxisBoundaries(data, options)).toEqual(expected);
      });
    });
  });
});
