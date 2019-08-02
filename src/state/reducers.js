import { combineReducers } from 'redux';

import article from './news/article-reducer';
import cookies from './cookies/cookie-reducer';
import home from './home/home-reducer';
import news from './news/news-reducer';

const reducers = combineReducers({
  article,
  cookies,
  home,
  news,
});

export default reducers;
