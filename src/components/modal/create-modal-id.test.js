import createModalID from './create-modal-id';

jest.mock('nanoid', () => ({
  nanoid: () => 'id',
}));

describe('Create modal id', () => {
  it('should create id from supplied argument', () => {
    const id = 'modalid';
    const expected = 'modalid-id';
    expect(createModalID(id)).toBe(expected);
  });

  it('should create id when none supplied from argument', () => {
    const id = null;
    const expected = 'modal-id';
    expect(createModalID(id)).toBe(expected);
  });
});
