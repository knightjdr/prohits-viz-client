import newPosition from './new-position';

describe('New position', () => {
  it('should return x and y when region will be in bounds', () => {
    const dimensions = {
      columns: 50,
      pageX: 25,
      pageY: 25,
      rows: 50,
    };
    const event = {
      clientX: 500,
      clientY: 500,
      target: {
        getBoundingClientRect: () => ({
          height: 1000,
          left: 0,
          top: 0,
          width: 1000,
        }),
      },
    };
    const expected = [13, 13];
    expect(newPosition(event, dimensions)).toEqual(expected);
  });

  it('should return limits when region will be beyond bounds', () => {
    const dimensions = {
      columns: 50,
      pageX: 25,
      pageY: 25,
      rows: 50,
    };
    const event = {
      clientX: 900,
      clientY: 950,
      target: {
        getBoundingClientRect: () => ({
          height: 1000,
          left: 0,
          top: 0,
          width: 1000,
        }),
      },
    };
    const expected = [25, 25];
    expect(newPosition(event, dimensions)).toEqual(expected);
  });

  it('should return minimums when region will be below bounds', () => {
    const dimensions = {
      columns: 50,
      pageX: 25,
      pageY: 25,
      rows: 50,
    };
    const event = {
      clientX: 0,
      clientY: 0,
      target: {
        getBoundingClientRect: () => ({
          height: 1000,
          left: 0,
          top: 0,
          width: 1000,
        }),
      },
    };
    const expected = [0, 0];
    expect(newPosition(event, dimensions)).toEqual(expected);
  });
});
