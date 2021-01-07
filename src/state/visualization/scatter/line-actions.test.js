import * as actions from './line-actions';

describe('Line actions', () => {
  it('should dispatch an action to update a setting', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      setting: 'showMidline',
      type: actions.UPDATE_LINE_SETTING,
      value: true,
    };
    expect(actions.updateLineSetting('showMidline', true)).toEqual(expectedAction);
  });
});
