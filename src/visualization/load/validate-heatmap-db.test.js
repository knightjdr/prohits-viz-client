import { validateColumnDB, validateRowDB } from './validate-heatmap-db';

describe('Validate column database', () => {
  it('should throw an error when there is no column database', () => {
    const expected = new Error('The file must include a "columnDB" array');
    expect(() => validateColumnDB()).toThrow(expected);
  });

  it('should throw an error the column database is not an array', () => {
    const columnDB = {};
    const expected = new Error('The file must include a "columnDB" array');
    expect(() => validateColumnDB(columnDB)).toThrow(expected);
  });

  it('should not throw an error for valid data', () => {
    const columnDB = [];
    expect(() => validateColumnDB(columnDB)).not.toThrow();
  });
});

describe('Validate row database', () => {
  it('should throw an error when there is no row database', () => {
    const expected = new Error('The file must include a "rowDB" array');
    expect(() => validateRowDB()).toThrow(expected);
  });

  it('should throw an error the row database is not an array', () => {
    const rowDB = {};
    const expected = new Error('The file must include a "rowDB" array');
    expect(() => validateRowDB(rowDB)).toThrow(expected);
  });

  it('should throw an error when there are no row entries', () => {
    const rowDB = [];
    const expected = new Error('Each "rowDB" entry should have a "data" and "name" property');
    expect(() => validateRowDB(rowDB)).toThrow(expected);
  });

  it('should throw an error when entries have no data property', () => {
    const rowDB = [
      { name: 'test' },
    ];
    const expected = new Error('Each "rowDB" entry should have a "data" and "name" property');
    expect(() => validateRowDB(rowDB)).toThrow(expected);
  });

  it('should throw an error when entries have no name property', () => {
    const rowDB = [
      { data: [] },
    ];
    const expected = new Error('Each "rowDB" entry should have a "data" and "name" property');
    expect(() => validateRowDB(rowDB)).toThrow(expected);
  });

  it('should throw an error when the row data is not an array', () => {
    const rowDB = [
      { data: {}, name: 'test' },
    ];
    const expected = new Error('The row data should be an array with at least a "value" property');
    expect(() => validateRowDB(rowDB)).toThrow(expected);
  });

  it('should throw an error when the row data does not have a "value" property', () => {
    const rowDB = [
      { data: [{}], name: 'test' },
    ];
    const expected = new Error('The row data should be an array with at least a "value" property');
    expect(() => validateRowDB(rowDB)).toThrow(expected);
  });

  it('should not throw an error for valid data', () => {
    const rowDB = [
      { data: [{ value: 1 }], name: 'test' },
    ];
    expect(() => validateRowDB(rowDB)).not.toThrow();
  });
});
