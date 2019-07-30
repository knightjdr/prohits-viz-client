import HomeReducer from './home-reducer';
import * as actions from './home-actions';

const emptyState = {
  isLoaded: false,
  news: [],
  spotlight: [],
};
const testResponse = {
  news: ['a', 'b'],
  spotlight: ['a', 'b'],
};

describe('Home reducer', () => {
  it('should return the initial state', () => {
    const action = {};
    const expectedState = emptyState;
    expect(HomeReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle FILL_HOME action', () => {
    const action = {
      data: testResponse,
      type: actions.FILL_HOME,
    };
    const expectedState = {
      isLoaded: true,
      news: ['a', 'b'],
      spotlight: ['a', 'b'],
    };
    expect(HomeReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle missing action', () => {
    const action = {
      data: testResponse,
      type: null,
    };
    const expectedState = emptyState;
    expect(HomeReducer(undefined, action)).toEqual(expectedState);
  });
});
