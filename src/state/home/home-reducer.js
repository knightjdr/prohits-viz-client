import { FILL_HOME } from './home-actions';

const defaultState = {
  isLoaded: false,
  news: [],
  spotlight: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILL_HOME:
      return {
        ...state,
        isLoaded: true,
        ...action.data,
      };
    default:
      return state;
  }
};

export default reducer;
