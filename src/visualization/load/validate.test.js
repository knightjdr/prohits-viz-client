import ValidateJson from './validate';

describe('Validate user loaded json', () => {
  it('should return error for invalid JSON', () => {
    const json = ValidateJson(1234);
    expect(json.err).toBeTruthy();
    expect(json.message).toBe('Invalid file format');
  });

  it('should return error for missing parameters prop or parameters not equal to an object', () => {
    // Missing "parameters" property.
    let jsonString = '{}';
    let json = ValidateJson(jsonString);
    expect(json.err).toBeTruthy();
    expect(json.message).toBe('The JSON object must have a "parameters" property with an object containing analysis parameters');

    // "parameters" value is not an object.
    jsonString = '{"parameters": []}';
    json = ValidateJson(jsonString);
    expect(json.err).toBeTruthy();
    expect(json.message).toBe('The JSON object must have a "parameters" property with an object containing analysis parameters');
  });

  it('should return error for missing or unsupported image type', () => {
    // Missing imageType.
    let jsonString = '{"parameters": {}}';
    let json = ValidateJson(jsonString);
    expect(json.err).toBeTruthy();
    expect(json.message).toBe('The image type must be specified in the parameters object and be of a supported type');

    // Unsupported imageType.
    jsonString = '{"parameters": {"imageType": "something"}}';
    json = ValidateJson(jsonString);
    expect(json.err).toBeTruthy();
    expect(json.message).toBe('The image type must be specified in the parameters object and be of a supported type');
  });
});

describe('Validate JSON for dotplot/heatmap', () => {
  it('should return error for missing columns prop or columns does not have an array of names', () => {
    // Missing "columns" property.
    let jsonString = '{"parameters": {"imageType": "dotplot"}}';
    let json = ValidateJson(jsonString);
    expect(json.err).toBeTruthy();
    expect(json.message).toBe('The JSON object must have a "column" property with an array of column names');

    // "columns.names" value is not an array.
    jsonString = '{"columns": { "names": {} }, "parameters": {"imageType": "dotplot"}}';
    json = ValidateJson(jsonString);
    expect(json.err).toBeTruthy();
    expect(json.message).toBe('The JSON object must have a "column" property with an array of column names');
  });

  it('should return error for missing rows prop or rows not equal to array', () => {
    // Missing "rows" property.
    let jsonString = '{"columns": { "names": ["a", "b"] }, "parameters": {"imageType": "dotplot"}}';
    let json = ValidateJson(jsonString);
    expect(json.err).toBeTruthy();
    expect(json.message).toBe('The JSON object must have a "rows" property with a list of row values');

    // row ""list"" value is not an array.
    jsonString = '{"columns": { "names": ["a", "b"] }, "parameters": {"imageType": "dotplot"}, "rows": { "list": {} } }';
    json = ValidateJson(jsonString);
    expect(json.err).toBeTruthy();
    expect(json.message).toBe('The JSON object must have a "rows" property with a list of row values');
  });

  it('should have a data and names prop of correct type for each entry in the rows array ', () => {
    // Missing props.
    let jsonString = '{"columns": { "names": ["a", "b"] }, "parameters": {"imageType": "dotplot"}, "rows": { "list": [] }}';
    let json = ValidateJson(jsonString);
    expect(json.err).toBeTruthy();
    expect(json.message).toBe('Each "rows" entry should have a "data" and "name" prop');

    // Missing data prop.
    jsonString = '{"columns": { "names": ["a", "b"] }, "parameters": {"imageType": "dotplot"}, "rows": { "list": [{"name": "test"}] } }';
    json = ValidateJson(jsonString);
    expect(json.err).toBeTruthy();
    expect(json.message).toBe('Each "rows" entry should have a "data" and "name" prop');

    // Missing name prop.
    jsonString = '{"columns": { "names": ["a", "b"] }, "parameters": {"imageType": "dotplot"}, "rows": { "list": [{"data": []}] } }';
    json = ValidateJson(jsonString);
    expect(json.err).toBeTruthy();
    expect(json.message).toBe('Each "rows" entry should have a "data" and "name" prop');

    // Data prop of incorrect type.
    jsonString = '{"columns": { "names": ["a", "b"] }, "parameters": {"imageType": "dotplot"}, "rows": { "list": [{"data": {}, "name": "test"}]} }';
    json = ValidateJson(jsonString);
    expect(json.err).toBeTruthy();
    expect(json.message).toBe('The row data should be an array with at least a "value" key');

    // Data prop missing value.
    jsonString = '{"columns": { "names": ["a", "b"] }, "parameters": {"imageType": "dotplot"}, "rows": { "list": [{"data": [{}], "name": "test"}]} }';
    json = ValidateJson(jsonString);
    expect(json.err).toBeTruthy();
    expect(json.message).toBe('The row data should be an array with at least a "value" key');
  });

  it('should validate dotplot data', () => {
    // Data prop missing value.
    const jsonString = '{"columns": { "names": ["a", "b"] }, "parameters": {"imageType": "dotplot"}, "rows": { "list": [{"data": [{"value": 1}], "name": "test"}]} }';
    const json = ValidateJson(jsonString);
    expect(json.err).toBeFalsy();
    const parsed = {
      columns: { names: ['a', 'b'] },
      parameters: { imageType: 'dotplot' },
      rows: { list: [{ data: [{ value: 1 }], name: 'test' }] },
    };
    expect(json.json).toEqual(parsed);
  });

  it('should valide heatmap data', () => {
    // Data prop missing value.
    const jsonString = '{"columns": { "names": ["a", "b"] }, "parameters": {"imageType": "heatmap"}, "rows": { "list": [{"data": [{"value": 1}], "name": "test"}]} }';
    const json = ValidateJson(jsonString);
    expect(json.err).toBeFalsy();
    const parsed = {
      columns: { names: ['a', 'b'] },
      parameters: { imageType: 'heatmap' },
      rows: { list: [{ data: [{ value: 1 }], name: 'test' }] },
    };
    expect(json.json).toEqual(parsed);
  });
});

describe('Validate json for scatterplot', () => {
  it('should validate scatterplot data', () => {
    // Data prop missing value.
    const jsonString = '{"parameters": {"imageType": "scatter"}}';
    const json = ValidateJson(jsonString);
    expect(json.err).toBeFalsy();
    const parsed = {
      parameters: { imageType: 'scatter' },
    };
    expect(json.json).toEqual(parsed);
  });
});
