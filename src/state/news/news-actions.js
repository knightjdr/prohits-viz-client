export const FILL_NEWS = 'FILL_NEWS';
export const GET_NEWS = 'GET_NEWS';
export const NEWS_ERROR = 'NEWS_ERROR';

export const fillNews = articles => ({
  articles,
  type: FILL_NEWS,
});

export const getNews = () => ({
  type: GET_NEWS,
});

export const newsError = () => ({
  type: NEWS_ERROR,
});
