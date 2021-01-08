import { defineFcLines, defineMidline } from './define-lines';

describe('Fold change lines', () => {
  it('should define lines', () => {
    const fc = [-10, -2, 3];
    const ticks = {
      x: [0, 15, 30],
      y: [0, 30, 60],
    };

    const expected = [
      {
        key: '-10',
        x1: 1,
        x2: 6,
        y1: 10,
        y2: 60,
      },
      {
        key: '-2',
        x1: 1,
        x2: 30,
        y1: 2,
        y2: 60,
      },
      {
        key: '3',
        x1: 3,
        x2: 30,
        y1: 1,
        y2: 10,
      },
    ];
    expect(defineFcLines(fc, ticks)).toEqual(expected);
  });
});

describe('Define midline', () => {
  it('should define midline when x and y have the same ticks', () => {
    const ticks = {
      x: [0, 15, 30],
      y: [0, 15, 30],
    };

    const expected = {
      x1: 0,
      x2: 30,
      y1: 0,
      y2: 30,
    };
    expect(defineMidline(ticks)).toEqual(expected);
  });

  it('should define midline when x has larger ending tick', () => {
    const ticks = {
      x: [0, 30, 60],
      y: [0, 15, 30],
    };

    const expected = {
      x1: 0,
      x2: 30,
      y1: 0,
      y2: 30,
    };
    expect(defineMidline(ticks)).toEqual(expected);
  });

  it('should define midline when x has greater starting tick', () => {
    const ticks = {
      x: [10, 100, 1000],
      y: [1, 10, 100, 1000],
    };

    const expected = {
      x1: 10,
      x2: 1000,
      y1: 10,
      y2: 1000,
    };
    expect(defineMidline(ticks)).toEqual(expected);
  });

  it('should define midline when y has larger ending tick', () => {
    const ticks = {
      x: [0, 15, 30],
      y: [0, 30, 60],
    };

    const expected = {
      x1: 0,
      x2: 30,
      y1: 0,
      y2: 30,
    };
    expect(defineMidline(ticks)).toEqual(expected);
  });

  it('should define midline when y has greater starting tick', () => {
    const ticks = {
      x: [1, 10, 100, 1000],
      y: [10, 100, 1000],
    };

    const expected = {
      x1: 10,
      x2: 1000,
      y1: 10,
      y2: 1000,
    };
    expect(defineMidline(ticks)).toEqual(expected);
  });
});
