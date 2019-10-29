import fillMarkers, { defaultState } from './markers';

describe('Fill markers', () => {
  it('should return file-defined marker object when valid', () => {
    const fileMarkers = {
      main: {
        color: '#f44338',
        list: {
          id: {
            height: 20,
            width: 100,
            x: 0.1,
            y: 0.2,

          },
        },
        record: true,
        show: false,
      },
    };
    const expected = fileMarkers;
    expect(fillMarkers(fileMarkers)).toEqual(expected);
  });

  it('should return defaults when file-defined marker object invalid', () => {
    const fileMarkers = {
      main: {
        color: 'f44338',
        list: [],
        record: 'true',
        show: 'false',
      },
    };
    const expected = {
      main: defaultState,
    };
    expect(fillMarkers(fileMarkers)).toEqual(expected);
  });

  it('should return defaults when no selections are defined', () => {
    const fileMarkers = {};
    const expected = {
      main: defaultState,
    };
    expect(fillMarkers(fileMarkers)).toEqual(expected);
  });

  it('should return defaults when file-defined markers is not an object', () => {
    const fileMarkers = [];
    const expected = {
      main: defaultState,
    };
    expect(fillMarkers(fileMarkers)).toEqual(expected);
  });

  it('should return defaults when file-defined markers undefined', () => {
    const expected = {
      main: defaultState,
    };
    expect(fillMarkers()).toEqual(expected);
  });
});
