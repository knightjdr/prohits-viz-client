import validateSCV from './validate-fields';

describe('Validate scv analysis fields', () => {
  it('should validate acceptable fields', () => {
    const form = {
      abundanceCap: '50',
      abundanceFilterColumn: '',
      conditionIDType: 'symbol',
      conditionMapColumn: '',
      conditionMapFile: [],
      known: 'interaction',
      knownFile: [],
      minAbundance: '0',
      primaryFilter: '0.01',
      proteinTissues: [],
      readoutIDType: 'entrez',
      readoutMapColumn: '',
      readoutMapFile: [],
      rnaTissues: [],
      specificity: 'true',
      verticalHeatmap: 'false',
    };

    const expected = {
      abundanceCap: 50,
      abundanceFilterColumn: '',
      conditionIDType: 'symbol',
      conditionMapColumn: '',
      conditionMapFile: [],
      known: 'interaction',
      knownFile: [],
      minAbundance: 0,
      primaryFilter: 0.01,
      proteinTissues: [],
      readoutIDType: 'entrez',
      readoutMapColumn: '',
      readoutMapFile: [],
      rnaTissues: [],
      specificity: true,
      verticalHeatmap: false,
    };

    Object.entries(form).forEach(([key, value]) => {
      expect(validateSCV(key, value)).toEqual({ value: expected[key] });
    });
  });

  it('should invalidate unacceptable fields', () => {
    const form = {
      abundanceCap: 'a',
      abundanceFilterColumn: 1,
      conditionIDType: 'gi',
      conditionMapColumn: 0,
      conditionMapFile: 'a',
      known: 'someMetric',
      knownFile: 'a',
      minAbundance: 'a',
      primaryFilter: 'a',
      proteinTissues: 'tissue',
      readoutIDType: 'gi',
      readoutMapColumn: 1,
      readoutMapFile: 'a',
      rnaTissues: 'tissue',
      specificity: 'yes',
      verticalHeatmap: 'no',
    };

    const expected = {
      abundanceCap: 'should be a number',
      abundanceFilterColumn: 'should be a string',
      conditionIDType: 'invalid ID type: gi',
      conditionMapColumn: 'should be a string',
      conditionMapFile: 'should be an array',
      known: 'invalid metric: someMetric',
      knownFile: 'should be an array',
      minAbundance: 'should be a number',
      primaryFilter: 'should be a number',
      proteinTissues: 'should be an array',
      readoutIDType: 'invalid ID type: gi',
      readoutMapColumn: 'should be a string',
      readoutMapFile: 'should be an array',
      rnaTissues: 'should be an array',
      specificity: 'should be a boolean',
      verticalHeatmap: 'should be a boolean',
    };

    Object.entries(form).forEach(([key, value]) => {
      expect(validateSCV(key, value)).toEqual({ error: expected[key] });
    });
  });

  it('should return empty object for unknown field', () => {
    expect(validateSCV('unknown', '1')).toEqual({});
  });
});
