import { reduceAndClearState, reduceAndLoadState } from './interactive-file-reducer';

describe('Clear data', () => {
  it('should return empty object', () => {
    expect(reduceAndClearState()).toEqual({});
  });

  it('should return defaultState', () => {
    expect(reduceAndClearState([])).toEqual([]);
  });
});

describe('Add data from file', () => {
  it('should return data desired property is available', () => {
    const action = {
      file: {
        annotations: { color: '#ff0000' },
      },
    };
    const property = 'annotations';

    const expected = { color: '#ff0000' };
    expect(reduceAndLoadState(action, property)).toEqual(expected);
  });

  it('should return empty object when property is not defined', () => {
    const action = {
      file: {},
    };
    const property = 'annotations';

    const expected = {};
    expect(reduceAndLoadState(action, property)).toEqual(expected);
  });

  it('should return supplied defaultState when property is not defined', () => {
    const action = {
      file: {},
    };
    const property = 'annotations';

    const expected = [];
    expect(reduceAndLoadState(action, property, [])).toEqual(expected);
  });
});
