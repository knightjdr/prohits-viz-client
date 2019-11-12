import fillTabs, { defaultState } from './tabs';

describe('Fill tabs', () => {
  it('should return user-defined tabs when valid', () => {
    const userTabs = {
      active: 'go-1',
      analysisID: 1,
      activeSnapshot: 'snapshot-1',
      availableAnalysis: ['go-1'],
      availableSnapshots: ['main', 'snapshot-1'],
      snapshotID: 1,
      tabType: 'analysis',
    };
    const expected = userTabs;
    expect(fillTabs(userTabs)).toEqual(expected);
  });

  it('should return defaults when user-defined tabs invalid', () => {
    const userTabs = {
      active: 'go-1',
      analysisID: 'a',
      activeSnapshot: 'snapshot-1',
      availableAnalysis: {},
      availableSnapshots: {},
      snapshotID: '1',
      tabType: 1,
    };
    const expected = {
      active: 'main',
      analysisID: 0,
      activeSnapshot: 'main',
      availableAnalysis: [],
      availableSnapshots: ['main'],
      snapshotID: 0,
      tabType: 'snapshot',
    };
    expect(fillTabs(userTabs)).toEqual(expected);
  });

  it('should return defaults when tabs are empty', () => {
    const userTabs = {};
    const expected = defaultState;
    expect(fillTabs(userTabs)).toEqual(expected);
  });

  it('should return defaults when user-defined tabs are not an object', () => {
    const userTabs = [];
    const expected = defaultState;
    expect(fillTabs(userTabs)).toEqual(expected);
  });

  it('should return defaults when user-defined tabs undefined', () => {
    const userTabs = undefined;
    const expected = defaultState;
    expect(fillTabs(userTabs)).toEqual(expected);
  });

  it('should set the active tab to the first available snapshot when it is invalid', () => {
    const userTabs = {
      active: 'snapshot-2',
      availableAnalysis: ['go-1'],
      availableSnapshots: ['main', 'snapshot-1'],
    };
    const expected = 'main';
    expect(fillTabs(userTabs).active).toBe(expected);
  });

  it('should set the tab type to snapshot when the active tab is not found', () => {
    const userTabs = {
      active: 'go-2',
      availableAnalysis: ['go-1'],
      availableSnapshots: ['main', 'snapshot-1'],
      tabType: 'analysis',
    };
    const expected = 'snapshot';
    expect(fillTabs(userTabs).tabType).toBe(expected);
  });

  it('should set the active snapshot tab to the first available snapshot when it is invalid', () => {
    const userTabs = {
      activeSnapshot: 'snapshot-2',
      availableAnalysis: ['go-1'],
      availableSnapshots: ['main', 'snapshot-1'],
    };
    const expected = 'main';
    expect(fillTabs(userTabs).activeSnapshot).toBe(expected);
  });
});
