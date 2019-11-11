import canReSort from './can-re-sort';

describe('Can re-sort', () => {
  it('should return status with valid sortBy term and sortByRef term', () => {
    const columnDB = ['a', 'b', 'c'];
    const availableColumns = [1, 2];
    const sortBy = 'b';
    const sortByRef = 'c';
    const expected = {
      sortByIndex: 1,
      sortByRefIndex: 2,
      status: true,
    };
    expect(canReSort(columnDB, availableColumns, sortBy, sortByRef)).toEqual(expected);
  });

  it('should return status with unavailable sortBy term', () => {
    const columnDB = ['a', 'b', 'c'];
    const availableColumns = [1, 2];
    const sortBy = 'a';
    const expected = {
      sortByIndex: 0,
      status: false,
    };
    expect(canReSort(columnDB, availableColumns, sortBy)).toEqual(expected);
  });

  it('should return status with invalid sortBy term', () => {
    const columnDB = ['a', 'b', 'c'];
    const availableColumns = [1, 2];
    const sortBy = 'd';
    const expected = {
      sortByIndex: -1,
      status: false,
    };
    expect(canReSort(columnDB, availableColumns, sortBy)).toEqual(expected);
  });

  it('should return status with undefined sortBy term', () => {
    const columnDB = ['a', 'b', 'c'];
    const availableColumns = [1, 2];
    const expected = {
      status: false,
    };
    expect(canReSort(columnDB, availableColumns)).toEqual(expected);
  });

  it('should return status with unavailable sortByRef term', () => {
    const columnDB = ['a', 'b', 'c'];
    const availableColumns = [1, 2];
    const sortBy = 'b';
    const sortByRef = 'a';
    const expected = {
      sortByIndex: 1,
      sortByRefIndex: '',
      status: true,
    };
    expect(canReSort(columnDB, availableColumns, sortBy, sortByRef)).toEqual(expected);
  });

  it('should return status with invalid sortByRef term', () => {
    const columnDB = ['a', 'b', 'c'];
    const availableColumns = [1, 2];
    const sortBy = 'b';
    const sortByRef = 'd';
    const expected = {
      sortByIndex: 1,
      sortByRefIndex: '',
      status: true,
    };
    expect(canReSort(columnDB, availableColumns, sortBy, sortByRef)).toEqual(expected);
  });
});
