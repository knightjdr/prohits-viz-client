export const FILL_ARTICLE = 'FILL_ARTICLE';
export const GET_ARTICLE = 'GET_ARTICLE';
export const ARTICLE_ERROR = 'ARTICLE_ERROR';

export const fillArticle = (id, details) => ({
  details,
  id,
  type: FILL_ARTICLE,
});

export const getArticle = id => ({
  id,
  type: GET_ARTICLE,
});

export const articleError = id => ({
  id,
  type: ARTICLE_ERROR,
});
