import scaleData from './scale-data';

jest.mock('nanoid', () => ({
  nanoid: () => 'id123',
}));

describe('Scale data', () => {
  describe('linear', () => {
    it('should scale positive data', () => {
      const options = {
        axisLength: 100,
        logBase: 'none',
      };
      const lines = {
        fcLines: [
          {
            key: '-10',
            x1: 1,
            x2: 3,
            y1: 10,
            y2: 30,
          },
        ],
        midline: {
          x1: 0,
          x2: 20,
          y1: 0,
          y2: 20,
        },
      };
      const points = [
        { label: 'a', x: 5, y: 10 },
        { label: 'b', x: 15, y: 5 },
        { label: 'c', x: 10, y: 25 },
      ];
      const ticks = {
        x: [0, 10, 20],
        y: [0, 10, 20, 30],
      };

      const expected = {
        lines: {
          fcLines: [
            {
              key: '-10',
              x1: 5,
              x2: 15,
              y1: 66.67,
              y2: 0,
            },
          ],
          midline: {
            x1: 0,
            x2: 100,
            y1: 100,
            y2: 33.33,
          },
        },
        points: [
          { label: 'a', x: 25, y: 33.33 },
          { label: 'b', x: 75, y: 16.67 },
          { label: 'c', x: 50, y: 83.33 },
        ],
        ticks: {
          x: [
            { key: 'id123', label: 0, x: 0 },
            { key: 'id123', label: 10, x: 50 },
            { key: 'id123', label: 20, x: 100 },
          ],
          y: [
            { key: 'id123', label: 0, y: 0 },
            { key: 'id123', label: 10, y: 33.33 },
            { key: 'id123', label: 20, y: 66.67 },
            { key: 'id123', label: 30, y: 100 },
          ],
        },
      };
      expect(scaleData(points, ticks, lines, options)).toEqual(expected);
    });

    it('should scale negative data', () => {
      const options = {
        axisLength: 100,
        logBase: 'none',
      };
      const lines = {
        fcLines: [
          {
            key: '-10',
            x1: -3,
            x2: -0.01,
            y1: -30,
            y2: -0.1,
          },
        ],
        midline: {
          x1: -20,
          x2: 0,
          y1: -20,
          y2: 0,
        },
      };
      const points = [
        { label: 'a', x: -5, y: -10 },
        { label: 'b', x: -15, y: -5 },
        { label: 'c', x: -10, y: -25 },
      ];
      const ticks = {
        x: [-20, -10, 0],
        y: [-30, -20, -10, 0],
      };

      const expected = {
        lines: {
          fcLines: [
            {
              key: '-10',
              x1: 85,
              x2: 99.95,
              y1: 100,
              y2: 0.33,
            },
          ],
          midline: {
            x1: 0,
            x2: 100,
            y1: 66.67,
            y2: 0,
          },
        },
        points: [
          { label: 'a', x: 75, y: 66.67 },
          { label: 'b', x: 25, y: 83.33 },
          { label: 'c', x: 50, y: 16.67 },
        ],
        ticks: {
          x: [
            { key: 'id123', label: -20, x: 0 },
            { key: 'id123', label: -10, x: 50 },
            { key: 'id123', label: 0, x: 100 },
          ],
          y: [
            { key: 'id123', label: -30, y: 0 },
            { key: 'id123', label: -20, y: 33.33 },
            { key: 'id123', label: -10, y: 66.67 },
            { key: 'id123', label: 0, y: 100 },
          ],
        },
      };
      expect(scaleData(points, ticks, lines, options)).toEqual(expected);
    });

    it('should scale positive and negative data', () => {
      const options = {
        axisLength: 100,
        logBase: 'none',
      };
      const lines = {
        fcLines: [
          {
            key: '-10',
            x1: -3,
            x2: 2,
            y1: -30,
            y2: 20,
          },
        ],
        midline: {
          x1: -20,
          x2: 20,
          y1: -20,
          y2: 20,
        },
      };
      const points = [
        { label: 'a', x: -5, y: -10 },
        { label: 'b', x: -15, y: 5 },
        { label: 'c', x: 10, y: -25 },
        { label: 'd', x: 10, y: 20 },
      ];
      const ticks = {
        x: [-20, -10, 0, 10, 20],
        y: [-30, -20, -10, 0, 10, 20],
      };

      const expected = {
        lines: {
          fcLines: [
            {
              key: '-10',
              x1: 42.5,
              x2: 55,
              y1: 100,
              y2: 0,
            },
          ],
          midline: {
            x1: 0,
            x2: 100,
            y1: 80,
            y2: 0,
          },
        },
        points: [
          { label: 'a', x: 37.5, y: 40 },
          { label: 'b', x: 12.5, y: 70 },
          { label: 'c', x: 75, y: 10 },
          { label: 'd', x: 75, y: 100 },
        ],
        ticks: {
          x: [
            { key: 'id123', label: -20, x: 0 },
            { key: 'id123', label: -10, x: 25 },
            { key: 'id123', label: 0, x: 50 },
            { key: 'id123', label: 10, x: 75 },
            { key: 'id123', label: 20, x: 100 },
          ],
          y: [
            { key: 'id123', label: -30, y: 0 },
            { key: 'id123', label: -20, y: 20 },
            { key: 'id123', label: -10, y: 40 },
            { key: 'id123', label: 0, y: 60 },
            { key: 'id123', label: 10, y: 80 },
            { key: 'id123', label: 20, y: 100 },
          ],
        },
      };
      expect(scaleData(points, ticks, lines, options)).toEqual(expected);
    });
  });

  describe('log base 2', () => {
    it('should scale positive data', () => {
      const options = {
        axisLength: 100,
        logBase: '2',
        logX: true,
        logY: true,
      };
      const lines = {
        fcLines: [
          {
            key: '-10',
            x1: 0.5,
            x2: 3.2,
            y1: 5,
            y2: 32,
          },
        ],
        midline: {
          x1: 1,
          x2: 16,
          y1: 1,
          y2: 16,
        },
      };
      const points = [
        { label: 'a', x: 8, y: 8 },
        { label: 'b', x: 16, y: 4 },
        { label: 'c', x: 4, y: 25 },
        { label: 'd', x: 0.2, y: 4 },
      ];
      const ticks = {
        x: [0.5, 1, 2, 4, 8, 16],
        y: [1, 2, 4, 8, 16, 32],
      };

      const expected = {
        lines: {
          fcLines: [
            {
              key: '-10',
              x1: 0,
              x2: 53.56,
              y1: 53.56,
              y2: 0,
            },
          ],
          midline: {
            x1: 20,
            x2: 100,
            y1: 100,
            y2: 20,
          },
        },
        points: [
          { label: 'a', x: 80, y: 60 },
          { label: 'b', x: 100, y: 40 },
          { label: 'c', x: 60, y: 92.88 },
          { label: 'd', x: 0, y: 40 },
        ],
        ticks: {
          x: [
            { key: 'id123', label: 0.5, x: 0 },
            { key: 'id123', label: 1, x: 20 },
            { key: 'id123', label: 2, x: 40 },
            { key: 'id123', label: 4, x: 60 },
            { key: 'id123', label: 8, x: 80 },
            { key: 'id123', label: 16, x: 100 },
          ],
          y: [
            { key: 'id123', label: 1, y: 0 },
            { key: 'id123', label: 2, y: 20 },
            { key: 'id123', label: 4, y: 40 },
            { key: 'id123', label: 8, y: 60 },
            { key: 'id123', label: 16, y: 80 },
            { key: 'id123', label: 32, y: 100 },
          ],
        },
      };
      const actual = scaleData(points, ticks, lines, options);
      expect(actual.points).toEqual(expected.points);
    });

    it('should scale negative data', () => {
      const options = {
        axisLength: 100,
        logBase: '2',
        logX: true,
        logY: true,
      };
      const lines = {
        fcLines: [
          {
            key: '-10',
            x1: -3.2,
            x2: -1,
            y1: -32,
            y2: -10,
          },
        ],
        midline: {
          x1: -16,
          x2: -1,
          y1: -16,
          y2: -1,
        },
      };
      const points = [
        { label: 'a', x: -8, y: -8 },
        { label: 'b', x: -16, y: -4 },
        { label: 'c', x: -4, y: -25 },
        { label: 'd', x: -0.5, y: -4 },
      ];
      const ticks = {
        x: [-16, -8, -4, -2, -1],
        y: [-32, -16, -8, -4, -2, -1],
      };

      const expected = {
        lines: {
          fcLines: [
            {
              key: '-10',
              x1: 58.05,
              x2: 100,
              y1: 100,
              y2: 66.44,
            },
          ],
          midline: {
            x1: -0,
            x2: 100,
            y1: 80,
            y2: 0,
          },
        },
        points: [
          { label: 'a', x: 25, y: 40 },
          { label: 'b', x: -0, y: 60 },
          { label: 'c', x: 50, y: 7.12 },
          { label: 'd', x: 100, y: 60 },
        ],
        ticks: {
          x: [
            { key: 'id123', label: -16, x: -0 },
            { key: 'id123', label: -8, x: 25 },
            { key: 'id123', label: -4, x: 50 },
            { key: 'id123', label: -2, x: 75 },
            { key: 'id123', label: -1, x: 100 },
          ],
          y: [
            { key: 'id123', label: -32, y: -0 },
            { key: 'id123', label: -16, y: 20 },
            { key: 'id123', label: -8, y: 40 },
            { key: 'id123', label: -4, y: 60 },
            { key: 'id123', label: -2, y: 80 },
            { key: 'id123', label: -1, y: 100 },
          ],
        },
      };
      expect(scaleData(points, ticks, lines, options)).toEqual(expected);
    });

    it('should scale positive and negative data', () => {
      const options = {
        axisLength: 100,
        logBase: '2',
        logX: true,
        logY: true,
      };
      const lines = {
        fcLines: [
          {
            key: '-10',
            x1: -3.2,
            x2: 1.6,
            y1: -32,
            y2: 16,
          },
        ],
        midline: {
          x1: -16,
          x2: 8,
          y1: -16,
          y2: 8,
        },
      };
      const points = [
        { label: 'a', x: -8, y: -16 },
        { label: 'b', x: -16, y: 8 },
        { label: 'c', x: 4, y: -2 },
        { label: 'd', x: 8, y: -32 },
        { label: 'e', x: -0.5, y: -32 },
      ];
      const ticks = {
        x: [-16, -8, -4, -2, -1, 1, 2, 4, 8],
        y: [-32, -16, -8, -4, -2, -1, 1, 2, 4, 8, 16],
      };

      const expected = {
        lines: {
          fcLines: [
            {
              key: '-10',
              x1: 29.02,
              x2: 70.98,
              y1: 100,
              y2: 0,
            },
          ],
          midline: {
            x1: -0,
            x2: 100,
            y1: 90,
            y2: 10,
          },
        },
        points: [
          { label: 'a', x: 12.5, y: 10 },
          { label: 'b', x: -0, y: 90 },
          { label: 'c', x: 87.5, y: 40 },
          { label: 'd', x: 100, y: -0 },
          { label: 'e', x: 50, y: -0 },
        ],
        ticks: {
          x: [
            { key: 'id123', label: -16, x: -0 },
            { key: 'id123', label: -8, x: 12.5 },
            { key: 'id123', label: -4, x: 25 },
            { key: 'id123', label: -2, x: 37.5 },
            { key: 'id123', label: -1, x: 50 },
            { key: 'id123', label: 1, x: 62.5 },
            { key: 'id123', label: 2, x: 75 },
            { key: 'id123', label: 4, x: 87.5 },
            { key: 'id123', label: 8, x: 100 },
          ],
          y: [
            { key: 'id123', label: -32, y: -0 },
            { key: 'id123', label: -16, y: 10 },
            { key: 'id123', label: -8, y: 20 },
            { key: 'id123', label: -4, y: 30 },
            { key: 'id123', label: -2, y: 40 },
            { key: 'id123', label: -1, y: 50 },
            { key: 'id123', label: 1, y: 60 },
            { key: 'id123', label: 2, y: 70 },
            { key: 'id123', label: 4, y: 80 },
            { key: 'id123', label: 8, y: 90 },
            { key: 'id123', label: 16, y: 100 },
          ],
        },
      };
      expect(scaleData(points, ticks, lines, options)).toEqual(expected);
    });
  });

  describe('log base 10', () => {
    it('should scale positive data', () => {
      const options = {
        axisLength: 100,
        logBase: '10',
        logX: true,
        logY: true,
      };
      const lines = {
        fcLines: [
          {
            key: '-10',
            x1: 1,
            x2: 100,
            y1: 10,
            y2: 1000,
          },
        ],
        midline: {
          x1: 1,
          x2: 100,
          y1: 1,
          y2: 100,
        },
      };
      const points = [
        { label: 'a', x: 10, y: 1 },
        { label: 'b', x: 100, y: 100 },
        { label: 'c', x: 1, y: 750 },
        { label: 'd', x: 0.5, y: 100 },
      ];
      const ticks = {
        x: [1, 10, 100],
        y: [1, 10, 100, 1000],
      };

      const expected = {
        lines: {
          fcLines: [
            {
              key: '-10',
              x1: 0,
              x2: 100,
              y1: 66.67,
              y2: 0,
            },
          ],
          midline: {
            x1: 0,
            x2: 100,
            y1: 100,
            y2: 33.33,
          },
        },
        points: [
          { label: 'a', x: 50, y: 0 },
          { label: 'b', x: 100, y: 66.67 },
          { label: 'c', x: 0, y: 95.84 },
          { label: 'd', x: 0, y: 66.67 },
        ],
        ticks: {
          x: [
            { key: 'id123', label: 1, x: 0 },
            { key: 'id123', label: 10, x: 50 },
            { key: 'id123', label: 100, x: 100 },
          ],
          y: [
            { key: 'id123', label: 1, y: 0 },
            { key: 'id123', label: 10, y: 33.33 },
            { key: 'id123', label: 100, y: 66.67 },
            { key: 'id123', label: 1000, y: 100 },
          ],
        },
      };
      expect(scaleData(points, ticks, lines, options)).toEqual(expected);
    });

    it('should scale positive data on only one axis', () => {
      const options = {
        axisLength: 100,
        logBase: '10',
        logX: true,
        logY: false,
      };
      const lines = {
        fcLines: [],
      };
      const points = [
        { label: 'a', x: 10, y: 1 },
        { label: 'b', x: 100, y: 100 },
        { label: 'c', x: 1, y: 250 },
      ];
      const ticks = {
        x: [1, 10, 100],
        y: [0, 100, 200, 300],
      };

      const expected = {
        lines: {
          fcLines: [],
        },
        points: [
          { label: 'a', x: 50, y: 0.33 },
          { label: 'b', x: 100, y: 33.33 },
          { label: 'c', x: 0, y: 83.33 },
        ],
        ticks: {
          x: [
            { key: 'id123', label: 1, x: 0 },
            { key: 'id123', label: 10, x: 50 },
            { key: 'id123', label: 100, x: 100 },
          ],
          y: [
            { key: 'id123', label: 0, y: 0 },
            { key: 'id123', label: 100, y: 33.33 },
            { key: 'id123', label: 200, y: 66.67 },
            { key: 'id123', label: 300, y: 100 },
          ],
        },
      };
      expect(scaleData(points, ticks, lines, options)).toEqual(expected);
    });

    it('should scale negative data', () => {
      const options = {
        axisLength: 100,
        logBase: '10',
        logX: true,
        logY: true,
      };
      const lines = {
        fcLines: [
          {
            key: '-10',
            x1: -100,
            x2: -1,
            y1: -1000,
            y2: -10,
          },
        ],
        midline: {
          x1: -100,
          x2: -1,
          y1: -100,
          y2: -1,
        },
      };
      const points = [
        { label: 'a', x: -10, y: -1 },
        { label: 'b', x: -100, y: -100 },
        { label: 'c', x: -1, y: -750 },
        { label: 'd', x: -0.5, y: -100 },
      ];
      const ticks = {
        x: [-100, -10, -1],
        y: [-1000, -100, -10, -1],
      };

      const expected = {
        lines: {
          fcLines: [
            {
              key: '-10',
              x1: 0,
              x2: 100,
              y1: 100,
              y2: 33.33,
            },
          ],
          midline: {
            x1: 0,
            x2: 100,
            y1: 66.67,
            y2: 0,
          },
        },
        points: [
          { label: 'a', x: 50, y: 100 },
          { label: 'b', x: 0, y: 33.33 },
          { label: 'c', x: 100, y: 4.16 },
          { label: 'd', x: 100, y: 33.33 },
        ],
        ticks: {
          x: [
            { key: 'id123', label: -100, x: 0 },
            { key: 'id123', label: -10, x: 50 },
            { key: 'id123', label: -1, x: 100 },
          ],
          y: [
            { key: 'id123', label: -1000, y: 0 },
            { key: 'id123', label: -100, y: 33.33 },
            { key: 'id123', label: -10, y: 66.67 },
            { key: 'id123', label: -1, y: 100 },
          ],
        },
      };
      expect(scaleData(points, ticks, lines, options)).toEqual(expected);
    });

    it('should scale positive and negative data', () => {
      const options = {
        axisLength: 100,
        logBase: '10',
        logX: true,
        logY: true,
      };
      const lines = {
        fcLines: [
          {
            key: '-10',
            x1: -100,
            x2: 10,
            y1: -1000,
            y2: 100,
          },
        ],
        midline: {
          x1: -100,
          x2: 10,
          y1: -100,
          y2: 10,
        },
      };
      const points = [
        { label: 'a', x: -10, y: -1 },
        { label: 'b', x: -100, y: 100 },
        { label: 'c', x: 10, y: -500 },
        { label: 'd', x: 10, y: 1 },
        { label: 'e', x: 0.5, y: 1 },
      ];
      const ticks = {
        x: [-100, -10, -1, 1, 10],
        y: [-1000, -100, -10, -1, 1, 10, 100],
      };

      const expected = {
        lines: {
          fcLines: [
            {
              key: '-10',
              x1: 0,
              x2: 100,
              y1: 100,
              y2: 0,
            },
          ],
          midline: {
            x1: 0,
            x2: 100,
            y1: 83.33,
            y2: 16.67,
          },
        },
        points: [
          { label: 'a', x: 25, y: 50 },
          { label: 'b', x: 0, y: 100 },
          { label: 'c', x: 100, y: 5.02 },
          { label: 'd', x: 100, y: 66.67 },
          { label: 'e', x: 75, y: 66.67 },
        ],
        ticks: {
          x: [
            { key: 'id123', label: -100, x: 0 },
            { key: 'id123', label: -10, x: 25 },
            { key: 'id123', label: -1, x: 50 },
            { key: 'id123', label: 1, x: 75 },
            { key: 'id123', label: 10, x: 100 },
          ],
          y: [
            { key: 'id123', label: -1000, y: 0 },
            { key: 'id123', label: -100, y: 16.67 },
            { key: 'id123', label: -10, y: 33.33 },
            { key: 'id123', label: -1, y: 50 },
            { key: 'id123', label: 1, y: 66.67 },
            { key: 'id123', label: 10, y: 83.33 },
            { key: 'id123', label: 100, y: 100 },
          ],
        },
      };
      expect(scaleData(points, ticks, lines, options)).toEqual(expected);
    });
  });
});
