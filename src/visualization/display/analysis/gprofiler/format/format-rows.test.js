import createSourceLink from './create-source-link';
import formatRows from './format-rows';

jest.mock('nanoid', () => ({
  nanoid: () => 'abc123',
}));
jest.mock('./create-source-link');

describe('Format gProfiler response data for table', () => {
  let actual;

  beforeAll(() => {
    createSourceLink.mockClear();
    createSourceLink.mockReturnValue('link');
    const rows = [
      {
        genes: 'a, b',
        id: 'SOURCE:1234',
        intersectionSize: 5,
        pValue: '1.23-4',
        querySize: 10,
        source: 'SOURCE',
        sourceURL: 'http://test.org/SOURCE:1234',
        term: 'Test term',
        termSize: 20,
      },
    ];
    actual = formatRows(rows);
  });

  it('should create source link', () => {
    expect(createSourceLink).toHaveBeenCalledWith('SOURCE:1234', 'http://test.org/SOURCE:1234');
  });

  it('should return results formatted for table', () => {
    const expected = [
      {
        genes: {
          align: 'left',
          content: 'a, b',
          showOverflow: true,
        },
        id: {
          content: 'link',
        },
        intersectionSize: {
          content: 5,
        },
        querySize: {
          content: 10,
        },
        pValue: {
          content: '1.23-4',
        },
        rowID: 'abc123',
        source: {
          content: 'SOURCE',
        },
        term: {
          align: 'left',
          content: 'Test term',
          showOverflow: true,
        },
        termSize: {
          content: 20,
        },
      },
    ];
    expect(actual).toEqual(expected);
  });
});
