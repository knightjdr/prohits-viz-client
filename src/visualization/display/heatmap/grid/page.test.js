import getPage, { setRadius, setScore } from './page';

const gradient = ['#fff'];
const range = jest.fn();
range.mockReturnValue(0);

const dimensions = {
  pageX: 2,
  pageY: 2,
};
const edgeRange = () => 0;
const fillRange = () => 0;
const position = {
  x: 0,
  y: 0,
};

describe('Set circle radius', () => {
  it('should return input radius when ratio is not a number', () => {
    expect(setRadius(undefined, 10)).toBe(10);
    expect(setRadius(null, 10)).toBe(10);
    expect(setRadius('a', 10)).toBe(10);
  });

  it('should return calculated radius when ratio is a number', () => {
    expect(setRadius(0, 10)).toBe(0);
    expect(setRadius(1, 10)).toBe(10);
    expect(setRadius(0.5, 10)).toBe(5);
  });
});

describe('Set circle score', () => {
  it('should return zero when score is not a number', () => {
    expect(setScore(undefined)).toBe(0);
    expect(setScore(null)).toBe(0);
    expect(setScore('a')).toBe(0);
  });

  it('should return calculated score when score is a number', () => {
    expect(setScore(0)).toBe(0);
    expect(setScore(1)).toBe(1);
    expect(setScore(0.5)).toBe(0.5);
  });
});

describe('Get page', () => {
  it('should subset an array of data rows for heatmap', () => {
    const expected = [
      {
        data: [
          { fillColor: '#fff', key: 'a-0', value: 0 },
          { fillColor: '#fff', key: 'a-1', value: 1 },
        ],
        name: 'a',
      },
      {
        data: [
          { fillColor: '#fff', key: 'b-0', value: 3 },
          { fillColor: '#fff', key: 'b-1', value: 4 },
        ],
        name: 'b',
      },
    ];
    const rows = {
      list: [
        {
          data: [{ value: 0 }, { value: 1 }, { value: 2 }],
          name: 'a',
        },
        {
          data: [{ value: 3 }, { value: 4 }, { value: 5 }],
          name: 'b',
        },
        {
          data: [{ value: 6 }, { value: 7 }, { value: 8 }],
          name: 'c',
        },
      ],
    };
    const page = getPage(
      'heatmap',
      rows.list,
      position,
      dimensions,
      20,
      gradient,
      gradient,
      edgeRange,
      fillRange,
      0,
    );
    expect(page).toEqual(expected);
  });

  describe('for dotplot', () => {
    it('should subset an array of data rows', () => {
      const expected = [
        {
          data: [
            {
              edgeColor: '#fff',
              fillColor: '#fff',
              key: 'a-0',
              radius: 9,
              ratio: 1,
              score: 0.1,
              value: 0,
            },
            {
              edgeColor: '#fff',
              fillColor: '#fff',
              key: 'a-1',
              radius: 4.5,
              ratio: 0.5,
              score: 0.1,
              value: 1,
            },
          ],
          name: 'a',
        },
        {
          data: [
            {
              edgeColor: '#fff',
              fillColor: '#fff',
              radius: 9,
              key: 'b-0',
              ratio: 1,
              score: 0.1,
              value: 3,
            },
            {
              edgeColor: '#fff',
              fillColor: '#fff',
              key: 'b-1',
              radius: 4.5,
              ratio: 0.5,
              score: 0.1,
              value: 4,
            },
          ],
          name: 'b',
        },
      ];
      const rows = {
        list: [
          {
            data: [
              { ratio: 1, score: 0.1, value: 0 },
              { ratio: 0.5, score: 0.1, value: 1 },
              { ratio: 0.2, score: 0.1, value: 2 },
            ],
            name: 'a',
          },
          {
            data: [
              { ratio: 1, score: 0.1, value: 3 },
              { ratio: 0.5, score: 0.1, value: 4 },
              { ratio: 0.2, score: 0.1, value: 5 },
            ],
            name: 'b',
          },
          {
            data: [
              { ratio: 1, score: 0.1, value: 6 },
              { ratio: 0.5, score: 0.1, value: 7 },
              { ratio: 0.2, score: 0.1, value: 8 },
            ],
            name: 'c',
          },
        ],
      };
      const page = getPage(
        'dotplot',
        rows.list,
        position,
        dimensions,
        20,
        gradient,
        gradient,
        edgeRange,
        fillRange,
        0,
      );
      expect(page).toEqual(expected);
    });
  });
});
