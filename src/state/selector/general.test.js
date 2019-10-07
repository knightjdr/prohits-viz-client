import { selectState, selectStateProperty } from './general';

const state = {
  keyA: {
    propA: 'A',
  },
};

describe('General selector for retrieving state values', () => {
  it('should return full object for specified key', () => {
    expect(selectState(state, 'keyA')).toEqual(state.keyA);
  });

  it('should return a specific prop from state object', () => {
    expect(selectStateProperty(state, 'keyA', 'propA')).toBe('A');
  });
});
