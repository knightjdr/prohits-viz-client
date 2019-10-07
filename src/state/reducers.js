import { combineReducers } from 'redux';

import article from './news/article-reducer';
import columnDB from './visualization/data/column-db-reducer';
import columns from './visualization/heatmap/columns-reducer';
import cookies from './cookies/cookie-reducer';
import dimensions from './visualization/settings/dimension-reducer';
import display from './visualization/settings/display-reducer';
import home from './home/home-reducer';
import minimap from './visualization/heatmap/minimap-reducer';
import news from './news/news-reducer';
import panel from './visualization/settings/panel-reducer';
import parameters from './visualization/data/parameter-reducer';
import position from './visualization/settings/position-reducer';
import rowDB from './visualization/data/row-db-reducer';
import rows from './visualization/heatmap/rows-reducer';
import session from './session/session-reducer';
import settings from './visualization/settings/settings-reducer';
import tabs from './visualization/settings/tabs-reducer';

const reducers = combineReducers({
  article,
  columnDB,
  columns,
  cookies,
  dimensions,
  display,
  home,
  minimap,
  news,
  panel,
  parameters,
  position,
  rowDB,
  rows,
  session,
  settings,
  tabs,
});

export default reducers;
