import fillTabs from './tabs';

describe('Fill tabs', () => {
  it('should return user-defined tabs when valid', () => {
    const userTabs = {
      active: 'tab2',
      available: ['tab1', 'tab2'],
    };
    const expected = userTabs;
    expect(fillTabs(userTabs)).toEqual(expected);
  });

  it('should return defaults when user-defined tabs invalid', () => {
    const userTabs = {
      active: 'tab1',
      available: {},
    };
    const expected = {
      active: 'main',
      available: ['main'],
    };
    expect(fillTabs(userTabs)).toEqual(expected);
  });

  it('should return defaults when tabs are empty', () => {
    const userTabs = {};
    const expected = {
      active: 'main',
      available: ['main'],
    };
    expect(fillTabs(userTabs)).toEqual(expected);
  });

  it('should return defaults when user-defined tabs are not an object', () => {
    const userTabs = [];
    const expected = {
      active: 'main',
      available: ['main'],
    };
    expect(fillTabs(userTabs)).toEqual(expected);
  });

  it('should return defaults when user-defined tabs undefined', () => {
    const userTabs = undefined;
    const expected = {
      active: 'main',
      available: ['main'],
    };
    expect(fillTabs(userTabs)).toEqual(expected);
  });

  it('should set the active tab to the first available tab when it is invalid', () => {
    const userTabs = {
      active: 'tab3',
      available: ['tab1', 'tab2'],
    };
    const expected = {
      active: 'tab1',
      available: ['tab1', 'tab2'],
    };
    expect(fillTabs(userTabs)).toEqual(expected);
  });
});
