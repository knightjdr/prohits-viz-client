import defineCircles from './define-circles';

describe('Define circles for circheatmap', () => {
  it('should return an object with values to use for drawing circle elements', () => {
    const data = [
      { known: true, label: 'readout5', segments: { a: 100, b: 50 } },
      { known: true, label: 'readout1', segments: { a: 12, b: 5 } },
      { known: true, label: 'readout3', segments: { a: 5, b: 5 } },
      { known: false, label: 'readout2', segments: { a: 13, b: 12 } },
      { known: false, label: 'readout4', segments: { a: 7, b: 4 } },
    ];

    const expected = {
      circles: {
        a: [100, 12, 5, 13, 7],
        b: [50, 5, 5, 12, 4],
      },
      segmentNames: ['readout5', 'readout1', 'readout3', 'readout2', 'readout4'],
    };
    expect(defineCircles(data)).toEqual(expected);
  });
});
