import fillAnotations, { defaultState } from './annotations';

describe('Fill annotations', () => {
  it('should return file-defined annotation object when valid', () => {
    const fileAnnotations = {
      main: {
        color: '#f44338',
        fontSize: 14,
        list: {
          id: {
            position: { x: 0.5, y: 0.1 },
            text: 'test',
          },
        },
        show: false,
      },
    };
    const expected = fileAnnotations;
    expect(fillAnotations(fileAnnotations)).toEqual(expected);
  });

  it('should return defaults when file-defined annotation object invalid', () => {
    const fileAnnotations = {
      main: {
        color: 'f44338',
        fontSize: '14',
        list: [],
        show: 'false',
      },
    };
    const expected = {
      main: defaultState,
    };
    expect(fillAnotations(fileAnnotations)).toEqual(expected);
  });

  it('should return defaults when no selections are defined', () => {
    const fileAnnotations = {};
    const expected = {
      main: defaultState,
    };
    expect(fillAnotations(fileAnnotations)).toEqual(expected);
  });

  it('should return defaults when file-defined annotations is not an object', () => {
    const fileAnnotations = [];
    const expected = {
      main: defaultState,
    };
    expect(fillAnotations(fileAnnotations)).toEqual(expected);
  });

  it('should return defaults when file-defined annotations undefined', () => {
    const expected = {
      main: defaultState,
    };
    expect(fillAnotations()).toEqual(expected);
  });
});
