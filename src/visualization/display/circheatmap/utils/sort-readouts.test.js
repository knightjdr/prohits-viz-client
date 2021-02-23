import sortReadouts from './sort-readouts';

describe('Sort readouts for circheatmap', () => {
  describe('ignoring known', () => {
    it('should sort readouts', () => {
      const data = [
        { label: 'readout1', segments: { a: 12, b: 5 } },
        { label: 'readout2', segments: { a: 13, b: 12 } },
        { label: 'readout3', segments: { a: 5, b: 5 } },
        { label: 'readout4', segments: { a: 7, b: 4 } },
        { label: 'readout5', segments: { a: 100, b: 50 } },
      ];
      const options = {
        byKnown: false,
        maxReadouts: 5,
        sortBy: 'a',
      };

      const expected = [
        { label: 'readout5', segments: { a: 100, b: 50 } },
        { label: 'readout2', segments: { a: 13, b: 12 } },
        { label: 'readout1', segments: { a: 12, b: 5 } },
        { label: 'readout4', segments: { a: 7, b: 4 } },
        { label: 'readout3', segments: { a: 5, b: 5 } },
      ];
      expect(sortReadouts(data, options)).toEqual(expected);
    });

    it('should sort and limit readouts', () => {
      const data = [
        { label: 'readout1', segments: { a: 12, b: 5 } },
        { label: 'readout2', segments: { a: 13, b: 12 } },
        { label: 'readout3', segments: { a: 5, b: 5 } },
        { label: 'readout4', segments: { a: 7, b: 4 } },
        { label: 'readout5', segments: { a: 100, b: 50 } },
      ];
      const options = {
        byKnown: false,
        maxReadouts: 3,
        sortBy: 'a',
      };

      const expected = [
        { label: 'readout5', segments: { a: 100, b: 50 } },
        { label: 'readout2', segments: { a: 13, b: 12 } },
        { label: 'readout1', segments: { a: 12, b: 5 } },
      ];
      expect(sortReadouts(data, options)).toEqual(expected);
    });
  });

  describe('by known', () => {
    it('should sort readouts', () => {
      const data = [
        { known: true, label: 'readout1', segments: { a: 12, b: 5 } },
        { known: false, label: 'readout2', segments: { a: 13, b: 12 } },
        { known: true, label: 'readout3', segments: { a: 5, b: 5 } },
        { known: false, label: 'readout4', segments: { a: 7, b: 4 } },
        { known: true, label: 'readout5', segments: { a: 100, b: 50 } },
      ];
      const options = {
        byKnown: true,
        maxReadouts: 5,
        sortBy: 'a',
      };

      const expected = [
        { known: true, label: 'readout5', segments: { a: 100, b: 50 } },
        { known: true, label: 'readout1', segments: { a: 12, b: 5 } },
        { known: true, label: 'readout3', segments: { a: 5, b: 5 } },
        { known: false, label: 'readout2', segments: { a: 13, b: 12 } },
        { known: false, label: 'readout4', segments: { a: 7, b: 4 } },
      ];
      expect(sortReadouts(data, options)).toEqual(expected);
    });
  });
});
