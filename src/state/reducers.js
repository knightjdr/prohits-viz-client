import { combineReducers } from 'redux';

// reducers
import cookies from './cookies/cookie-reducer';
import home from './home/home-reducer';
import news from './news/news-reducer';

const reducers = combineReducers({
  cookies,
  home,
  news,
});

export default reducers;
