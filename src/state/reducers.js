import { combineReducers } from 'redux';

import article from './news/article-reducer';
import columns from './visualization/file/columns-reducer';
import cookies from './cookies/cookie-reducer';
import dimensions from './visualization/settings/dimension-reducer';
import display from './visualization/settings/display-reducer';
import home from './home/home-reducer';
import minimap from './visualization/file/minimap-reducer';
import news from './news/news-reducer';
import panel from './visualization/settings/panel-reducer';
import parameters from './visualization/file/parameter-reducer';
import plot from './visualization/file/plot-reducer';
import position from './visualization/file/position-reducer';
import rows from './visualization/file/rows-reducer';
import selection from './visualization/file/selection-reducer';
import session from './session/session-reducer';
import settings from './visualization/file/settings-reducer';

const reducers = combineReducers({
  article,
  columns,
  cookies,
  dimensions,
  display,
  home,
  minimap,
  news,
  panel,
  parameters,
  plot,
  position,
  rows,
  selection,
  session,
  settings,
});

export default reducers;
