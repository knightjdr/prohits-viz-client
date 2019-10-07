import ValidateJson from './validate';

describe('Validate user loaded json', () => {
  it('should return error for invalid JSON', () => {
    const jsonString = ValidateJson(1234);
    const expected = {
      err: true,
      message: 'Invalid file format',
    };
    expect(ValidateJson(jsonString)).toEqual(expected);
  });

  describe('Missing or incorrectly defined paramaters', () => {
    it('should return error for missing paramaters property', () => {
      const jsonString = JSON.stringify({});
      const expected = {
        err: true,
        message: 'The JSON object must have a "parameters" property with an object containing analysis parameters',
      };
      expect(ValidateJson(jsonString)).toEqual(expected);
    });

    it('should return error for incorrectly defined paramaters', () => {
      const jsonString = JSON.stringify({
        parameters: [],
      });
      const expected = {
        err: true,
        message: 'The JSON object must have a "parameters" property with an object containing analysis parameters',
      };
      expect(ValidateJson(jsonString)).toEqual(expected);
    });
  });

  describe('Missing or unsupported image type', () => {
    it('should return error for missing image type', () => {
      const jsonString = JSON.stringify({
        parameters: {},
      });
      const expected = {
        err: true,
        message: 'The image type must be specified in the parameters object and be of a supported type',
      };
      expect(ValidateJson(jsonString)).toEqual(expected);
    });

    it('should return error for unsupported image type', () => {
      const jsonString = JSON.stringify({
        parameters: {
          imageType: 'something',
        },
      });
      const expected = {
        err: true,
        message: 'The image type must be specified in the parameters object and be of a supported type',
      };
      expect(ValidateJson(jsonString)).toEqual(expected);
    });
  });
});

describe('Validate JSON for dotplot/heatmap', () => {
  describe('Invalid columnDB', () => {
    it('should return error for missing columnDB', () => {
      const jsonString = JSON.stringify({
        parameters: {
          imageType: 'dotplot',
        },
      });
      const expected = {
        err: true,
        message: 'The JSON object must have a "columnDB" array',
      };
      expect(ValidateJson(jsonString)).toEqual(expected);
    });

    it('should return error when columnDB is not an array', () => {
      const jsonString = JSON.stringify({
        columnDB: {},
        parameters: {
          imageType: 'dotplot',
        },
      });
      const expected = {
        err: true,
        message: 'The JSON object must have a "columnDB" array',
      };
      expect(ValidateJson(jsonString)).toEqual(expected);
    });
  });

  describe('Invalid rowDB', () => {
    it('should return error for missing rowDB', () => {
      const jsonString = JSON.stringify({
        columnDB: ['a', 'b'],
        parameters: {
          imageType: 'dotplot',
        },
      });
      const expected = {
        err: true,
        message: 'The JSON object must have a "rowDB" array',
      };
      expect(ValidateJson(jsonString)).toEqual(expected);
    });

    it('should return error for invalid rowDB', () => {
      const jsonString = JSON.stringify({
        columnDB: ['a', 'b'],
        parameters: {
          imageType: 'dotplot',
        },
        rowDB: {},
      });
      const expected = {
        err: true,
        message: 'The JSON object must have a "rowDB" array',
      };
      expect(ValidateJson(jsonString)).toEqual(expected);
    });
  });

  describe('Row data', () => {
    it('should return error when there are no row entries', () => {
      const jsonString = JSON.stringify({
        columnDB: ['a', 'b'],
        parameters: {
          imageType: 'dotplot',
        },
        rowDB: [],
      });
      const expected = {
        err: true,
        message: 'Each "rowDB" entry should have a "data" and "name" property',
      };
      expect(ValidateJson(jsonString)).toEqual(expected);
    });

    it('should return error when the row entries have no "data"', () => {
      const jsonString = JSON.stringify({
        columnDB: ['a', 'b'],
        parameters: {
          imageType: 'dotplot',
        },
        rowDB: [
          { name: 'test' },
        ],
      });
      const expected = {
        err: true,
        message: 'Each "rowDB" entry should have a "data" and "name" property',
      };
      expect(ValidateJson(jsonString)).toEqual(expected);
    });

    it('should return error when the row entries have no name', () => {
      const jsonString = JSON.stringify({
        columnDB: ['a', 'b'],
        parameters: {
          imageType: 'dotplot',
        },
        rowDB: [
          { data: [] },
        ],
      });
      const expected = {
        err: true,
        message: 'Each "rowDB" entry should have a "data" and "name" property',
      };
      expect(ValidateJson(jsonString)).toEqual(expected);
    });

    it('should return error when the row data is not an array', () => {
      const jsonString = JSON.stringify({
        columnDB: ['a', 'b'],
        parameters: {
          imageType: 'dotplot',
        },
        rowDB: [
          { data: {}, name: 'test' },
        ],
      });
      const expected = {
        err: true,
        message: 'The row data should be an array with at least a "value" property',
      };
      expect(ValidateJson(jsonString)).toEqual(expected);
    });

    it('should return error when the row data does not have a "value" property', () => {
      const jsonString = JSON.stringify({
        columnDB: ['a', 'b'],
        parameters: {
          imageType: 'dotplot',
        },
        rowDB: [
          { data: [{}], name: 'test' },
        ],
      });
      const expected = {
        err: true,
        message: 'The row data should be an array with at least a "value" property',
      };
      expect(ValidateJson(jsonString)).toEqual(expected);
    });
  });

  it('should validate dotplot data', () => {
    const data = {
      columnDB: ['a', 'b'],
      parameters: { imageType: 'dotplot' },
      rowDB: [{ data: [{ value: 1 }], name: 'test' }],
    };
    const jsonString = JSON.stringify(data);
    const expected = {
      err: false,
      data,
    };
    expect(ValidateJson(jsonString)).toEqual(expected);
  });

  it('should valide heatmap data', () => {
    const data = {
      columnDB: ['a', 'b'],
      parameters: { imageType: 'heatmap' },
      rowDB: [{ data: [{ value: 1 }], name: 'test' }],
    };
    const jsonString = JSON.stringify(data);
    const expected = {
      err: false,
      data,
    };
    expect(ValidateJson(jsonString)).toEqual(expected);
  });
});
