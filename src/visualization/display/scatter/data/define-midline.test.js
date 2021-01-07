import defineMidline from './define-midline';

describe('Define midline', () => {
  it('should define midline when x and y have same scale axes', () => {
    const axisLength = 100;
    const ticks = {
      x: [
        { label: 0, x: 0 },
        { label: 15, x: 50 },
        { label: 30, x: 100 },
      ],
      y: [
        { label: 0, y: 0 },
        { label: 15, y: 50 },
        { label: 30, y: 100 },
      ],
    };

    const expected = {
      x1: 0,
      x2: 100,
      y1: 100,
      y2: 0,
    };
    expect(defineMidline(ticks, axisLength)).toEqual(expected);
  });

  it('should define midline when x has greater ending label', () => {
    const axisLength = 100;
    const ticks = {
      x: [
        { label: 0, x: 0 },
        { label: 30, x: 50 },
        { label: 60, x: 100 },
      ],
      y: [
        { label: 0, y: 0 },
        { label: 15, y: 50 },
        { label: 30, y: 100 },
      ],
    };

    const expected = {
      x1: 0,
      x2: 50,
      y1: 100,
      y2: 0,
    };
    expect(defineMidline(ticks, axisLength)).toEqual(expected);
  });

  it('should define midline when x has greater starting label', () => {
    const axisLength = 100;
    const ticks = {
      x: [
        { label: 10, x: 0 },
        { label: 100, x: 50 },
        { label: 1000, x: 100 },
      ],
      y: [
        { label: 1, y: 0 },
        { label: 10, y: 33.33 },
        { label: 100, y: 66.67 },
        { label: 1000, y: 100 },
      ],
    };

    const expected = {
      x1: 0,
      x2: 100,
      y1: 66.67,
      y2: 0,
    };
    expect(defineMidline(ticks, axisLength)).toEqual(expected);
  });

  it('should define midline when y has greater ending label', () => {
    const axisLength = 100;
    const ticks = {
      x: [
        { label: 0, x: 0 },
        { label: 15, x: 50 },
        { label: 30, x: 100 },
      ],
      y: [
        { label: 0, y: 0 },
        { label: 30, y: 50 },
        { label: 60, y: 100 },
      ],
    };

    const expected = {
      x1: 0,
      x2: 100,
      y1: 100,
      y2: 50,
    };
    expect(defineMidline(ticks, axisLength)).toEqual(expected);
  });

  it('should define midline when y has greater starting label', () => {
    const axisLength = 100;
    const ticks = {
      x: [
        { label: 1, x: 0 },
        { label: 10, x: 33.33 },
        { label: 100, x: 66.67 },
        { label: 1000, x: 100 },
      ],
      y: [
        { label: 10, y: 0 },
        { label: 100, y: 50 },
        { label: 1000, y: 100 },
      ],
    };

    const expected = {
      x1: 33.33,
      x2: 100,
      y1: 100,
      y2: 0,
    };
    expect(defineMidline(ticks, axisLength)).toEqual(expected);
  });
});
