import * as actions from './article-actions';

export const defaultState = {
  details: {},
  error: false,
  id: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.ARTICLE_ERROR:
      return {
        details: {},
        error: true,
        id: action.id,
      };
    case actions.FILL_ARTICLE:
      return {
        details: action.details,
        error: false,
        id: action.id,
      };
    case actions.GET_ARTICLE:
      return {
        details: {},
        error: false,
        id: action.id,
      };
    default:
      return state;
  }
};

export default reducer;
