import formatData from './format-data';

jest.mock('nanoid', () => ({
  nanoid: () => 'id123',
}));

describe('Format scatter plot data', () => {
  it('should format data with unequal scale axes', () => {
    const data = [
      { label: 'a', x: 5, y: 10 },
      { label: 'b', x: 15, y: 5 },
      { label: 'c', x: 10, y: 25 },
    ];
    const options = {
      axisLength: 100,
      equalScaleAxes: false,
      fcLines: [-10, 2],
      logBase: 'none',
      logX: false,
      logY: false,
      scale: 1,
      showFcLines: true,
      showMidline: true,
    };
    const expected = {
      lines: {
        axes: {
          x: {
            x1: 0,
            x2: 100,
            y1: 100,
            y2: 100,
          },
          y: {
            x1: 0,
            x2: 0,
            y1: 100,
            y2: 0,
          },
        },
        fcLines: [
          {
            key: '-10',
            x1: 0.05,
            x2: 15,
            y1: 99.67,
            y2: 0,
          },
          {
            key: '2',
            x1: 0.1,
            x2: 100,
            y1: 99.97,
            y2: 66.67,
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
    expect(formatData(data, options)).toEqual(expected);
  });

  it('should format data with equal scale axes', () => {
    const data = [
      { label: 'a', x: 5, y: 10 },
      { label: 'b', x: 15, y: 5 },
      { label: 'c', x: 10, y: 25 },
    ];
    const options = {
      axisLength: 100,
      equalScaleAxes: true,
      fcLines: [-10, 2],
      logBase: 'none',
      logX: false,
      logY: false,
      scale: 1,
      showFcLines: true,
      showMidline: true,
    };

    const expected = {
      lines: {
        axes: {
          x: {
            x1: 0,
            x2: 100,
            y1: 100,
            y2: 100,
          },
          y: {
            x1: 0,
            x2: 0,
            y1: 100,
            y2: 0,
          },
        },
        fcLines: [
          {
            key: '-10',
            x1: 0.03,
            x2: 10,
            y1: 99.67,
            y2: 0,
          },
          {
            key: '2',
            x1: 0.07,
            x2: 100,
            y1: 99.97,
            y2: 50,
          },
        ],
        midline: {
          x1: 0,
          x2: 100,
          y1: 100,
          y2: 0,
        },
      },
      points: [
        { label: 'a', x: 16.67, y: 33.33 },
        { label: 'b', x: 50, y: 16.67 },
        { label: 'c', x: 33.33, y: 83.33 },
      ],
      ticks: {
        x: [
          { key: 'id123', label: 0, x: 0 },
          { key: 'id123', label: 10, x: 33.33 },
          { key: 'id123', label: 20, x: 66.67 },
          { key: 'id123', label: 30, x: 100 },
        ],
        y: [
          { key: 'id123', label: 0, y: 0 },
          { key: 'id123', label: 10, y: 33.33 },
          { key: 'id123', label: 20, y: 66.67 },
          { key: 'id123', label: 30, y: 100 },
        ],
      },
    };
    expect(formatData(data, options)).toEqual(expected);
  });
});
