import fillSearchStatus, { defaultState } from './search-status';

describe('Fill search term', () => {
  it('should return file-defined search term object when valid', () => {
    const fileSearchStatus = {
      main: {
        columns: { a: true, aa: true },
        match: true,
        rows: { aaa: true },
        term: 'a',
      },
    };
    const expected = fileSearchStatus;
    expect(fillSearchStatus(fileSearchStatus)).toEqual(expected);
  });

  it('should return defaults when file-defined search term object invalid', () => {
    const fileSearchStatus = {
      main: {
        columns: ['a', 'aa'],
        match: 'true',
        rows: ['aaa'],
        term: 1,
      },
    };
    const expected = {
      main: defaultState,
    };
    expect(fillSearchStatus(fileSearchStatus)).toEqual(expected);
  });

  it('should return defaults when no selections are defined', () => {
    const fileSearchStatus = {};
    const expected = {
      main: defaultState,
    };
    expect(fillSearchStatus(fileSearchStatus)).toEqual(expected);
  });

  it('should return defaults when file-defined search term is not an object', () => {
    const fileSearchStatus = [];
    const expected = {
      main: defaultState,
    };
    expect(fillSearchStatus(fileSearchStatus)).toEqual(expected);
  });

  it('should return defaults when file-defined search term undefined', () => {
    const expected = {
      main: defaultState,
    };
    expect(fillSearchStatus()).toEqual(expected);
  });
});
