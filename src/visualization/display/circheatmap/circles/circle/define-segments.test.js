import defineSegments from './define-segments';

describe('Define circle segments', () => {
  it('should define segments for multiple values', () => {
    const options = {
      gradient: ['#ffffff', '#00ff00', '#000000'],
      radii: { inner: 80, outer: 100 },
      range: (value) => value / 25,
    };
    const readouts = ['a', 'b', 'c', 'd'];
    const values = [0, 25, 50, 25];

    const expected = [
      {
        a: { x: 100, y: 0 },
        b: { arc: 0, x: 0, y: 100 },
        c: { x: 0, y: 80 },
        d: { arc: 0, x: 80, y: 0 },
        fill: '#ffffff',
        readout: 'a',
      },
      {
        a: { x: 0, y: 100 },
        b: { arc: 0, x: -100, y: 0 },
        c: { x: -80, y: 0 },
        d: { arc: 0, x: 0, y: 80 },
        fill: '#00ff00',
        readout: 'b',
      },
      {
        a: { x: -100, y: 0 },
        b: { arc: 0, x: -0, y: -100 },
        c: { x: -0, y: -80 },
        d: { arc: 0, x: -80, y: 0 },
        fill: '#000000',
        readout: 'c',
      },
      {
        a: { x: -0, y: -100 },
        b: { arc: 0, x: 100, y: -0 },
        c: { x: 80, y: -0 },
        d: { arc: 0, x: -0, y: -80 },
        fill: '#00ff00',
        readout: 'd',
      },
    ];
    expect(defineSegments(values, readouts, options)).toEqual(expected);
  });

  it('should define segments for one value', () => {
    const options = {
      gradient: ['#000000'],
      radii: { inner: 80, outer: 100 },
      range: () => 0,
    };
    const readouts = ['a'];
    const values = [50];

    const expected = [
      {
        a: { x: 100, y: 0 },
        b: { arc: 1, x: 100, y: -0 },
        c: { x: 80, y: -0 },
        d: { arc: 1, x: 80, y: 0 },
        fill: '#000000',
        readout: 'a',
      },
    ];
    expect(defineSegments(values, readouts, options)).toEqual(expected);
  });
});
