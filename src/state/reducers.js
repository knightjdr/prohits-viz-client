import { combineReducers } from 'redux';

import article from './news/article-reducer';
import cookies from './cookies/cookie-reducer';
import home from './home/home-reducer';
import news from './news/news-reducer';
import panel from './visualization/settings/panel-reducer';
import parameters from './visualization/file/parameter-reducer';

const reducers = combineReducers({
  article,
  cookies,
  home,
  news,
  panel,
  parameters,
});

export default reducers;
