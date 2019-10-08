import selectActiveTab from './tab-selector';

const state = {
  tabs: {
    active: 'main',
  },
};

describe('Tab selector', () => {
  it('should return active tab', () => {
    const expected = 'main';
    expect(selectActiveTab(state)).toEqual(expected);
  });
});
