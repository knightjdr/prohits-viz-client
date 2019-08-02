import {
  FILL_ARTICLE,
  GET_ARTICLE,
  ARTICLE_ERROR,
} from './article-actions';

export const defaultState = {
  details: {},
  error: false,
  id: null,
  isLoaded: false,
  isLoading: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ARTICLE_ERROR:
      return {
        details: {},
        error: true,
        id: action.id,
        isLoaded: false,
        isLoading: false,
      };
    case FILL_ARTICLE:
      return {
        details: action.details,
        error: false,
        id: action.id,
        isLoaded: true,
        isLoading: false,
      };
    case GET_ARTICLE:
      return {
        details: {},
        error: false,
        id: action.id,
        isLoaded: false,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default reducer;
