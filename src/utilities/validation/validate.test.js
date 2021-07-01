import validate from './validate';

describe('Validate utility form', () => {
  describe('valid form', () => {
    let actual;

    beforeAll(() => {
      const fields = {
        fdr: 0.01,
        file: new File(
          ['test'],
          'test.txt',
          { type: 'text/plain' },
        ),
        utility: 'saintstats',
      };
      actual = validate(fields);
    });

    it('should not return any errors', () => {
      expect(actual.errors).toBeNull();
    });

    it('should return form data', () => {
      const expected = {
        fdr: '0.01',
        file: new File(
          ['test'],
          'test.txt',
          { type: 'text/plain' },
        ),
        utility: 'saintstats',
      };
      Array.from(actual.form.entries()).forEach(([key, value]) => {
        expect(value).toEqual(expected[key]);
      });
    });
  });

  it('should return errors for an invalid form', () => {
    const fields = { utility: 'saintstats' };
    const expected = {
      file: 'Please select a file',
      fdr: 'FDR is not within the bounds of 0 and 1',
    };
    expect(validate(fields).errors).toEqual(expected);
  });
});
