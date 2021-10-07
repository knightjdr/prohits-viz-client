import definePointsToLabel from './define-points-to-label';

describe('Define points to label', () => {
  it('should return an empty array when there are no labels', () => {
    const labels = {};
    const points = [
      { label: 'a', x: 10, y: 15 },
      { label: 'b', x: 50, y: 50 },
      { label: 'c', x: 70, y: 30 },
      { label: 'd', x: 40, y: 50 },
      { label: 'e', x: 100, y: 100 },
    ];
    const searchLabels = {};
    const options = {
      axisLength: 100,
      customization: {
        d: { radius: 6 },
      },
      fontSize: 12,
      points,
      labels,
      radius: 4,
      scale: 1,
      searchLabels,
    };

    const expected = [];
    expect(definePointsToLabel(options)).toEqual(expected);
  });

  it('should return an labels with information for plotting', () => {
    const labels = {
      a: true,
      c: true,
      d: true,
    };
    const points = [
      { label: 'a', x: 10, y: 15 },
      { label: 'b', x: 50, y: 50 },
      { label: 'c', x: 70, y: 30 },
      { label: 'd', x: 40, y: 50 },
      { label: 'e', x: 100, y: 100 },
    ];
    const searchLabels = { c: true };
    const options = {
      axisLength: 100,
      customization: {
        d: { radius: 6 },
      },
      fontSize: 12,
      points,
      labels,
      radius: 4,
      scale: 1,
      searchLabels,
    };

    const expected = [
      {
        dy: 4,
        fontSize: 12,
        label: 'a',
        style: { fontWeight: 'normal' },
        x: 18,
        y: 85,
      },
      {
        dy: 4.8,
        fontSize: 14.4,
        label: 'c',
        style: { fontWeight: 'bold' },
        x: 78,
        y: 70,
      },
      {
        dy: 4,
        fontSize: 12,
        label: 'd',
        style: { fontWeight: 'normal' },
        x: 50,
        y: 50,
      },
    ];
    expect(definePointsToLabel(options)).toEqual(expected);
  });
});
