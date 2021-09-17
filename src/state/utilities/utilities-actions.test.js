import * as actions from './utilities-actions';

describe('Utilities actions', () => {
  it('should dispatch an action to set a utility field', () => {
    const expectedAction = {
      field: 'fdr',
      type: actions.SET_UTILITY_FIELD,
      value: 0.05,
    };
    expect(actions.setUtilityField('fdr', 0.05)).toEqual(expectedAction);
  });

  it('should dispatch an action to set multiple utility fields', () => {
    const fields = {
      fdr: 0.01,
      topPreys: 10,
    };
    const expectedAction = {
      fields,
      type: actions.SET_UTILITY_FIELDS,
    };
    expect(actions.setUtilityFields(fields)).toEqual(expectedAction);
  });

  it('should dispatch an action to the utility file', () => {
    const expectedAction = {
      files: ['FILE'],
      type: actions.SET_UTILITY_FILE,
    };
    expect(actions.setUtilityFile(['FILE'])).toEqual(expectedAction);
  });

  it('should dispatch an action to the utility type', () => {
    const expectedAction = {
      type: actions.SET_UTILITY_TYPE,
      utility: 'saint_stats',
    };
    expect(actions.setUtilityType('saint_stats')).toEqual(expectedAction);
  });
});
