import {
  FILL_NEWS,
  GET_NEWS,
  NEWS_ERROR,
} from './news-actions';

export const defaultState = {
  articles: [],
  error: false,
  isLoaded: false,
  isLoading: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILL_NEWS:
      return {
        articles: action.articles,
        error: false,
        isLoaded: true,
        isLoading: false,
      };
    case GET_NEWS:
      return {
        articles: [],
        error: false,
        isLoaded: false,
        isLoading: true,
      };
    case NEWS_ERROR:
      return {
        articles: [],
        error: true,
        isLoaded: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
