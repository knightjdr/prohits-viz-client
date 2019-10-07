import { combineReducers } from 'redux';

import article from './news/article-reducer';
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
import rows from './visualization/heatmap/rows-reducer';
import session from './session/session-reducer';
import settings from './visualization/settings/settings-reducer';

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
  position,
  rows,
  session,
  settings,
});

export default reducers;
