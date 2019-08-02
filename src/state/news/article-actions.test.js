import * as actions from './article-actions';

describe('Article actions', () => {
  it('should dispatch an action to get news item', () => {
    const expectedAction = {
      id: 'id',
      type: actions.GET_ARTICLE,
    };
    expect(actions.getArticle('id')).toEqual(expectedAction);
  });

  it('should dispatch an action to fill news item', () => {
    const details = { headline: 'headline ' };
    const expectedAction = {
      details,
      id: 'id',
      type: actions.FILL_ARTICLE,
    };
    expect(actions.fillArticle('id', details)).toEqual(expectedAction);
  });

  it('should dispatch an error action', () => {
    const expectedAction = {
      id: 'id',
      type: actions.ARTICLE_ERROR,
    };
    expect(actions.articleError('id')).toEqual(expectedAction);
  });
});
