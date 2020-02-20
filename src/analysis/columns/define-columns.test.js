import defineColumns from './define-columns';

describe('Define Columns', () => {
  it('should define correlation columns', () => {
    const form = {
      fileType: 'saint',
      header: ['avgSpec', 'spec', 'bfdr', 'baits', 'columnX'],
      tool: 'correlation',
    };

    const expected = {
      abundance: {
        initialValue: 'spec',
        options: [
          { label: 'Suggested', optGroup: true },
          { label: 'spec', value: 'spec' },
          { label: 'avgSpec', value: 'avgSpec' },
          { label: 'Other', optGroup: true },
          { label: 'baits', value: 'baits' },
          { label: 'bfdr', value: 'bfdr' },
          { label: 'columnX', value: 'columnX' },
        ],
      },
      condition: {
        initialValue: 'baits',
        options: [
          { label: 'Suggested', optGroup: true },
          { label: 'baits', value: 'baits' },
          { label: 'Other', optGroup: true },
          { label: 'avgSpec', value: 'avgSpec' },
          { label: 'bfdr', value: 'bfdr' },
          { label: 'columnX', value: 'columnX' },
          { label: 'spec', value: 'spec' },
        ],
      },
      readout: {
        initialValue: '',
        options: [
          { label: 'Other', optGroup: true },
          { label: 'avgSpec', value: 'avgSpec' },
          { label: 'baits', value: 'baits' },
          { label: 'bfdr', value: 'bfdr' },
          { label: 'columnX', value: 'columnX' },
          { label: 'spec', value: 'spec' },
        ],
      },
      score: {
        initialValue: 'bfdr',
        options: [
          { label: 'Suggested', optGroup: true },
          { label: 'bfdr', value: 'bfdr' },
          { label: 'Other', optGroup: true },
          { label: 'avgSpec', value: 'avgSpec' },
          { label: 'baits', value: 'baits' },
          { label: 'columnX', value: 'columnX' },
          { label: 'spec', value: 'spec' },
        ],
      },
    };
    expect(defineColumns(form)).toEqual(expected);
  });

  it('should define dotplot columns', () => {
    const form = {
      fileType: 'saint',
      header: ['avgSpec', 'bfdr', 'baits', 'columnX'],
      tool: 'dotplot',
    };

    const expected = {
      abundance: {
        initialValue: 'avgSpec',
        options: [
          { label: 'Suggested', optGroup: true },
          { label: 'avgSpec', value: 'avgSpec' },
          { label: 'Other', optGroup: true },
          { label: 'baits', value: 'baits' },
          { label: 'bfdr', value: 'bfdr' },
          { label: 'columnX', value: 'columnX' },
        ],
      },
      condition: {
        initialValue: 'baits',
        options: [
          { label: 'Suggested', optGroup: true },
          { label: 'baits', value: 'baits' },
          { label: 'Other', optGroup: true },
          { label: 'avgSpec', value: 'avgSpec' },
          { label: 'bfdr', value: 'bfdr' },
          { label: 'columnX', value: 'columnX' },
        ],
      },
      readout: {
        initialValue: '',
        options: [
          { label: 'Other', optGroup: true },
          { label: 'avgSpec', value: 'avgSpec' },
          { label: 'baits', value: 'baits' },
          { label: 'bfdr', value: 'bfdr' },
          { label: 'columnX', value: 'columnX' },
        ],
      },
      score: {
        initialValue: 'bfdr',
        options: [
          { label: 'Suggested', optGroup: true },
          { label: 'bfdr', value: 'bfdr' },
          { label: 'Other', optGroup: true },
          { label: 'avgSpec', value: 'avgSpec' },
          { label: 'baits', value: 'baits' },
          { label: 'columnX', value: 'columnX' },
        ],
      },
    };
    expect(defineColumns(form)).toEqual(expected);
  });
});
