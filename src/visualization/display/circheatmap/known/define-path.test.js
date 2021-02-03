import definePath from './define-path';

describe('Define known arc for circheatmap', () => {
  it('should define arc when there are more known than unknown readouts', () => {
    const data = [
      { known: true, label: 'readout1', segments: { a: 12, b: 5 } },
      { known: false, label: 'readout2', segments: { a: 13, b: 12 } },
      { known: true, label: 'readout3', segments: { a: 5, b: 5 } },
      { known: true, label: 'readout4', segments: { a: 7, b: 4 } },
    ];
    const radius = 100;

    const expected = {
      arc: 1,
      x: -0,
      y: -100,
    };
    expect(definePath(data, radius)).toEqual(expected);
  });

  it('should define arc when there are less known than unknown readouts', () => {
    const data = [
      { known: false, label: 'readout1', segments: { a: 12, b: 5 } },
      { known: false, label: 'readout2', segments: { a: 13, b: 12 } },
      { known: true, label: 'readout3', segments: { a: 5, b: 5 } },
      { known: false, label: 'readout4', segments: { a: 7, b: 4 } },
    ];
    const radius = 100;

    const expected = {
      arc: 0,
      x: 0,
      y: 100,
    };
    expect(definePath(data, radius)).toEqual(expected);
  });
});
