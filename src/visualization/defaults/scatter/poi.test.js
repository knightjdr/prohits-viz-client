import fillPOI, { defaultState } from './poi';

describe('Fill POI', () => {
  it('should return file-defined POI object when valid', () => {
    const filePOI = {
      main: {
        points: [1, 3],
      },
    };
    const expected = filePOI;
    expect(fillPOI(filePOI)).toEqual(expected);
  });

  it('should return defaults when file-defined POI object invalid', () => {
    const filePOI = {
      main: {
        points: { 1: true, 3: true },
      },
    };
    const expected = {
      main: defaultState,
    };
    expect(fillPOI(filePOI)).toEqual(expected);
  });

  it('should return defaults when no properties are defined', () => {
    const filePOI = {};
    const expected = {
      main: defaultState,
    };
    expect(fillPOI(filePOI)).toEqual(expected);
  });

  it('should return defaults when file-defined POI is not an object', () => {
    const filePOI = [];
    const expected = {
      main: defaultState,
    };
    expect(fillPOI(filePOI)).toEqual(expected);
  });

  it('should return defaults when file-defined POI undefined', () => {
    const expected = {
      main: defaultState,
    };
    expect(fillPOI()).toEqual(expected);
  });
});
