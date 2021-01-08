import scaleData from './scale-data';

jest.mock('nanoid', () => ({
  nanoid: () => 'id123',
}));

describe('Scale data', () => {
  it('should scale linear data', () => {
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

  it('should scale log base 2 data', () => {
    const options = {
      axisLength: 100,
      logBase: '2',
    };
    const lines = {
      fcLines: [
        {
          key: '-10',
          x1: 1,
          x2: 3.2,
          y1: 10,
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
    ];
    const ticks = {
      x: [1, 2, 4, 8, 16],
      y: [1, 2, 4, 8, 16, 32],
    };

    const expected = {
      lines: {
        fcLines: [
          {
            key: '-10',
            x1: 0,
            x2: 41.95,
            y1: 33.56,
            y2: 0,
          },
        ],
        midline: {
          x1: 0,
          x2: 100,
          y1: 100,
          y2: 20,
        },
      },
      points: [
        { label: 'a', x: 75, y: 60 },
        { label: 'b', x: 100, y: 40 },
        { label: 'c', x: 50, y: 92.88 },
      ],
      ticks: {
        x: [
          { key: 'id123', label: 1, x: 0 },
          { key: 'id123', label: 2, x: 25 },
          { key: 'id123', label: 4, x: 50 },
          { key: 'id123', label: 8, x: 75 },
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
    expect(scaleData(points, ticks, lines, options)).toEqual(expected);
  });

  it('should scale log base 10 data', () => {
    const options = {
      axisLength: 100,
      logBase: '10',
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
});
