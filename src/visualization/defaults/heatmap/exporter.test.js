import fillExporter, { defaultState } from './exporter';

describe('Fill exporter', () => {
  it('should return user-specified format when valid', () => {
    const exporter = {
      format: 'png',
    };
    const expected = {
      ...defaultState,
      format: 'png',
    };
    expect(fillExporter(exporter)).toEqual(expected);
  });

  it('should return defaults when user options invalid', () => {
    const exporter = {
      format: 'pdf',
    };
    const expected = defaultState;
    expect(fillExporter(exporter)).toEqual(expected);
  });

  it('should return defaults when user options missing', () => {
    const exporter = {};
    const expected = defaultState;
    expect(fillExporter(exporter)).toEqual(expected);
  });

  it('should return defaults when user options undefined', () => {
    const expected = defaultState;
    expect(fillExporter(undefined)).toEqual(expected);
  });
});
