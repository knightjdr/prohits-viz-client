import * as actions from './news-actions';

describe('News actions', () => {
  it('should dispatch an action to get news', () => {
    const expectedAction = {
      type: actions.GET_NEWS,
    };
    expect(actions.getNews()).toEqual(expectedAction);
  });

  it('should dispatch an action to fill news state', () => {
    const action = ['a', 'b'];
    const expectedAction = {
      articles: ['a', 'b'],
      type: actions.FILL_NEWS,
    };
    expect(actions.fillNews(action)).toEqual(expectedAction);
  });

  it('should dispatch an error action', () => {
    const expectedAction = {
      type: actions.NEWS_ERROR,
    };
    expect(actions.newsError()).toEqual(expectedAction);
  });
});
