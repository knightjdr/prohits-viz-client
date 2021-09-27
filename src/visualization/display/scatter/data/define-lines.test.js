import { defineFcLines, defineMidline } from './define-lines';

describe('Fold change lines', () => {
  it('should define lines with positive ticks', () => {
    const fc = [-10, -2, 3];
    const ticks = {
      x: [0, 15, 30],
      y: [0, 30, 60],
    };

    const expected = [
      {
        key: '-10',
        x1: 0.01,
        x2: 6,
        y1: 0.1,
        y2: 60,
      },
      {
        key: '-2',
        x1: 0.01,
        x2: 30,
        y1: 0.02,
        y2: 60,
      },
      {
        key: '3',
        x1: 0.03,
        x2: 30,
        y1: 0.01,
        y2: 10,
      },
    ];
    expect(defineFcLines(fc, ticks)).toEqual(expected);
  });

  it('should define lines with negative ticks', () => {
    const fc = [-10, -2, 3];
    const ticks = {
      x: [-30, -15, 0],
      y: [-60, -30, 0],
    };

    const expected = [
      {
        key: '-10',
        x1: -6,
        x2: -0.01,
        y1: -60,
        y2: -0.1,
      },
      {
        key: '-2',
        x1: -30,
        x2: -0.01,
        y1: -60,
        y2: -0.02,
      },
      {
        key: '3',
        x1: -30,
        x2: -0.03,
        y1: -10,
        y2: -0.01,
      },
    ];
    expect(defineFcLines(fc, ticks)).toEqual(expected);
  });

  it('should define lines with positive and negative ticks', () => {
    const fc = [-10, -2, 3];
    const ticks = {
      x: [-30, -15, 0, 15, 30, 60],
      y: [-60, -30, 0, 30],
    };

    const expected = [
      {
        key: '-10',
        x1: -6,
        x2: 3,
        y1: -60,
        y2: 30,
      },
      {
        key: '-2',
        x1: -30,
        x2: 15,
        y1: -60,
        y2: 30,
      },
      {
        key: '3',
        x1: -30,
        x2: 60,
        y1: -10,
        y2: 20,
      },
    ];
    expect(defineFcLines(fc, ticks)).toEqual(expected);
  });
});

describe('Define midline', () => {
  describe('positive ticks', () => {
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

  describe('negative ticks', () => {
    it('should define midline when x and y have the same ticks', () => {
      const ticks = {
        x: [-30, -15, 0],
        y: [-30, -15, 0],
      };

      const expected = {
        x1: -30,
        x2: 0,
        y1: -30,
        y2: 0,
      };
      expect(defineMidline(ticks)).toEqual(expected);
    });

    it('should define midline when x has a more negative starting tick', () => {
      const ticks = {
        x: [-60, -30, 0],
        y: [-30, -15, 0],
      };

      const expected = {
        x1: -30,
        x2: 0,
        y1: -30,
        y2: 0,
      };
      expect(defineMidline(ticks)).toEqual(expected);
    });

    it('should define midline when x has a more negative ending tick', () => {
      const ticks = {
        x: [-1000, -100, -10],
        y: [-1000, -100, -10, -1],
      };

      const expected = {
        x1: -1000,
        x2: -10,
        y1: -1000,
        y2: -10,
      };
      expect(defineMidline(ticks)).toEqual(expected);
    });

    it('should define midline when y has a more negative starting tick', () => {
      const ticks = {
        x: [-30, -15, 0],
        y: [-60, -30, 0],
      };

      const expected = {
        x1: -30,
        x2: 0,
        y1: -30,
        y2: 0,
      };
      expect(defineMidline(ticks)).toEqual(expected);
    });

    it('should define midline when y has a more negative ending tick', () => {
      const ticks = {
        x: [-1000, -100, -10, -1],
        y: [-1000, -100, -10],
      };

      const expected = {
        x1: -1000,
        x2: -10,
        y1: -1000,
        y2: -10,
      };
      expect(defineMidline(ticks)).toEqual(expected);
    });
  });

  describe('positive and negative ticks', () => {
    it('should define midline when x and y have the same ticks', () => {
      const ticks = {
        x: [-30, -15, 0, 15, 30],
        y: [-30, -15, 0, 15, 30],
      };

      const expected = {
        x1: -30,
        x2: 30,
        y1: -30,
        y2: 30,
      };
      expect(defineMidline(ticks)).toEqual(expected);
    });

    it('should define midline when x has a more negative/positive starting/ending tick', () => {
      const ticks = {
        x: [-60, -30, 0, 30, 60],
        y: [-30, -15, 0, 15, 30],
      };

      const expected = {
        x1: -30,
        x2: 30,
        y1: -30,
        y2: 30,
      };
      expect(defineMidline(ticks)).toEqual(expected);
    });

    it('should define midline when y has a more negative/positive starting/ending tick', () => {
      const ticks = {
        x: [-30, -15, 0, 15, 30],
        y: [-60, -30, 0, 15, 30],
      };

      const expected = {
        x1: -30,
        x2: 30,
        y1: -30,
        y2: 30,
      };
      expect(defineMidline(ticks)).toEqual(expected);
    });

    it('should define midline when y has a more negative ending tick', () => {
      const ticks = {
        x: [-1000, -100, -10, -1, 1, 10, 100],
        y: [-100, -10, -1, 1, 10, 100, 1000],
      };

      const expected = {
        x1: -100,
        x2: 100,
        y1: -100,
        y2: 100,
      };
      expect(defineMidline(ticks)).toEqual(expected);
    });
  });
});
