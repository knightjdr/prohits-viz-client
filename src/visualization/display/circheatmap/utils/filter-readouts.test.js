import filterReadouts from './filter-readouts';

describe('Filter readouts for circheatmap', () => {
  it('should filter data by minimum for each attribute', () => {
    const circles = [
      { attribute: 'a', min: 10 },
      { attribute: 'b', min: 5 },
    ];
    const data = [
      { label: 'readout1', segments: { a: 10, b: 5 } },
      { label: 'readout2', segments: { a: 10, b: 4 } },
      { label: 'readout3', segments: { a: 9, b: 5 } },
      { label: 'readout4', segments: { a: 9, b: 4 } },
      { label: 'readout5', segments: { a: 100, b: 50 } },
    ];

    const expected = [
      { label: 'readout1', segments: { a: 10, b: 5 } },
      { label: 'readout5', segments: { a: 100, b: 50 } },
    ];
    expect(filterReadouts(data, circles)).toEqual(expected);
  });

  it('should filter data by readout order and minimum for each attribute', () => {
    const circles = [
      { attribute: 'a', min: 10 },
      { attribute: 'b', min: 5 },
    ];
    const data = [
      { label: 'readout1', segments: { a: 10, b: 5 } },
      { label: 'readout2', segments: { a: 10, b: 12 } },
      { label: 'readout3', segments: { a: 9, b: 5 } },
      { label: 'readout4', segments: { a: 9, b: 4 } },
      { label: 'readout5', segments: { a: 100, b: 50 } },
    ];
    const readoutOrder = [1, 4];

    const expected = [
      { label: 'readout2', segments: { a: 10, b: 12 } },
      { label: 'readout5', segments: { a: 100, b: 50 } },
    ];
    expect(filterReadouts(data, circles, readoutOrder)).toEqual(expected);
  });
});
