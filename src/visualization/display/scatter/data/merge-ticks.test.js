import mergeTicks from './merge-ticks';

describe('Merge ticks', () => {
  it('should merge linear ticks that are on same scale', () => {
    const logBase = 'none';
    const ticks = {
      x: [0, 10, 20, 30],
      y: [0, 10, 20, 30, 40, 50, 60],
    };
    const expected = [0, 10, 20, 30, 40, 50, 60];
    expect(mergeTicks(ticks, logBase)).toEqual(expected);
  });

  it('should merge linear ticks that are on different scales', () => {
    const logBase = 'none';
    const ticks = {
      x: [0, 10, 20, 30],
      y: [0, 100, 200, 300, 400, 500],
    };
    const expected = [0, 100, 200, 300, 400, 500];
    expect(mergeTicks(ticks, logBase)).toEqual(expected);
  });

  it('should merge log ticks that are on same scale', () => {
    const logBase = '10';
    const ticks = {
      x: [1, 10, 100],
      y: [10, 100],
    };
    const expected = [1, 10, 100];
    expect(mergeTicks(ticks, logBase)).toEqual(expected);
  });

  it('should merge log ticks that are on different scales', () => {
    const logBase = '10';
    const ticks = {
      x: [1, 10, 100],
      y: [1, 10, 100, 1000],
    };
    const expected = [1, 10, 100, 1000];
    expect(mergeTicks(ticks, logBase)).toEqual(expected);
  });
});
