import { combineReducers } from 'redux';

import article from './news/article-reducer';
import cookies from './cookies/cookie-reducer';
import home from './home/home-reducer';
import news from './news/news-reducer';
import panel from './visualization/settings/panel-reducer';
import parameters from './visualization/file/parameter-reducer';
import plot from './visualization/file/plot-reducer';
import settings from './visualization/file/settings-reducer';

const reducers = combineReducers({
  article,
  cookies,
  home,
  news,
  panel,
  parameters,
  plot,
  settings,
});

export default reducers;
