import * as actions from './home-actions';

describe('Home actions', () => {
  it('should dispatch an action to fill home state', () => {
    const data = { news: ['a', 'b'], spotlight: ['a', 'b'] };
    const action = data;
    const expectedAction = {
      data,
      type: actions.FILL_HOME,
    };
    expect(actions.fillHome(action)).toEqual(expectedAction);
  });
});
