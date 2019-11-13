import * as actions from './gprofiler-actions';

describe('Gprofiler actions', () => {
  it('should dispatch an action to change a setting', () => {
    const expectedAction = {
      setting: 'a',
      type: actions.CHANGE_GPROFILER_SETTING,
      value: 1,
    };
    expect(actions.changeGprofilerSetting('a', 1)).toEqual(expectedAction);
  });

  it('should dispatch an action to change multiple settings', () => {
    const settings = {
      a: 1,
      b: 2,
    };
    const expectedAction = {
      settings,
      type: actions.CHANGE_GPROFILER_SETTINGS,
    };
    expect(actions.changeGprofilerSettings(settings)).toEqual(expectedAction);
  });
});
