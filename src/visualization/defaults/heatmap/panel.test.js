import fillPanel, { defaultState } from './panel';

describe('Fill panel', () => {
  it('should return user options when valid', () => {
    const panel = {
      open: false,
      tab: 'info',
    };
    const expected = panel;
    expect(fillPanel(panel)).toEqual(expected);
  });

  it('should return defaults when user options invalid', () => {
    const panel = {
      open: 'false',
      tab: 'other',
    };
    const expected = defaultState;
    expect(fillPanel(panel)).toEqual(expected);
  });

  it('should return defaults when user options missing', () => {
    const panel = {};
    const expected = defaultState;
    expect(fillPanel(panel)).toEqual(expected);
  });

  it('should return defaults when user options undefined', () => {
    const expected = defaultState;
    expect(fillPanel(undefined)).toEqual(expected);
  });
});
