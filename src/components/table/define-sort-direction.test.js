import defineSortDirection from './define-sort-direction';

describe('Define sort direction', () => {
  it('should return default sort direction when a different field is passed', () => {
    const currentField = 'field1';
    const newField = 'field2';
    const expected = 'ascending';
    expect(defineSortDirection(currentField, newField)).toEqual(expected);
  });

  it('should return swap sort direction when the same field is passed', () => {
    const currentDirection = 'ascending';
    const currentField = 'field1';
    const newField = 'field1';
    const expected = 'descending';
    expect(defineSortDirection(currentField, newField, currentDirection)).toEqual(expected);
  });
});
