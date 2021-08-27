import defineFormValues, { customFileTypeValues, defaultFormValues } from './define-form-values';

describe('Define form values on tool change', () => {
  it('should return defaults when form values not specified', () => {
    const form = {
      fileType: 'saint',
    };
    const tool = 'dotplot';
    const expected = {
      ...defaultFormValues[tool],
      fileType: 'saint',
    };
    expect(defineFormValues(form, tool)).toEqual(expected);
  });

  it('should return defaults overridden by previous form values except for explicit exceptions', () => {
    const form = {
      abundanceCap: 30, // should always reset
      automaticallySetFill: false, // should always reset
      fillColor: 'green', // should always reset
      fileType: 'saint',
      minimumAbundance: 5,
      scoreType: 'gte',
    };
    const tool = 'dotplot';
    const expected = {
      ...defaultFormValues[tool],
      abundanceCap: 50,
      automaticallySetFill: true,
      fillColor: 'blue',
      fileType: 'saint',
      minimumAbundance: 5,
      scoreType: 'gte',
    };
    expect(defineFormValues(form, tool)).toEqual(expected);
  });

  it('should return defaults modified by input file type', () => {
    const form = {
      fileType: 'bagel',
    };
    const tool = 'dotplot';
    const expected = {
      ...defaultFormValues[tool],
      ...customFileTypeValues[form.fileType][tool],
      fileType: 'bagel',
    };
    expect(defineFormValues(form, tool)).toEqual(expected);
  });
});
