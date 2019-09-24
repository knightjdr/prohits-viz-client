import { combineReducers } from 'redux';

import article from './news/article-reducer';
import columns from './visualization/data/columns-reducer';
import cookies from './cookies/cookie-reducer';
import dimensions from './visualization/settings/dimension-reducer';
import display from './visualization/settings/display-reducer';
import home from './home/home-reducer';
import minimap from './visualization/data/minimap-reducer';
import news from './news/news-reducer';
import panel from './visualization/settings/panel-reducer';
import parameters from './visualization/data/parameter-reducer';
import plot from './visualization/data/plot-reducer';
import position from './visualization/data/position-reducer';
import rows from './visualization/data/rows-reducer';
import selection from './visualization/data/selection-reducer';
import session from './session/session-reducer';
import settings from './visualization/data/settings-reducer';

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
