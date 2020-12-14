import NewsReducer, { defaultState } from './news-reducer';
import * as actions from './news-actions';

describe('News reducer', () => {
  it('should return the initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(NewsReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle GET_NEWS action', () => {
    const action = {
      type: actions.GET_NEWS,
    };
    const expectedState = {
      articles: [],
      error: false,
      isLoaded: false,
      isLoading: true,
    };
    expect(NewsReducer(undefined, action)).toEqual(expectedState);
  });

  it('Should handle FILL_NEWS', () => {
    const action = {
      articles: ['a', 'b'],
      type: actions.FILL_NEWS,
    };
    const expectedState = {
      articles: ['a', 'b'],
      error: false,
      isLoaded: true,
      isLoading: false,
    };
    expect(NewsReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle NEWS_ERROR action', () => {
    const action = {
      type: actions.NEWS_ERROR,
    };
    const expectedState = {
      articles: [],
      error: true,
      isLoaded: false,
      isLoading: false,
    };
    expect(NewsReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle missing action', () => {
    const action = {
      data: ['a', 'b'],
      type: null,
    };
    const expectedState = defaultState;
    expect(NewsReducer(undefined, action)).toEqual(expectedState);
  });
});
