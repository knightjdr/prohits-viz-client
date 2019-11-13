import { combineReducers } from 'redux';

import analysis from './visualization/analysis/analysis-reducer';
import annotations from './visualization/markup/annotation-reducer';
import article from './news/article-reducer';
import columnDB from './visualization/data/column-db-reducer';
import columns from './visualization/heatmap/columns-reducer';
import cookies from './cookies/cookie-reducer';
import dimensions from './visualization/settings/dimension-reducer';
import display from './visualization/settings/display-reducer';
import gprofiler from './visualization/analysis/gprofiler-reducer';
import home from './home/home-reducer';
import markers from './visualization/markup/marker-reducer';
import minimap from './visualization/heatmap/minimap-reducer';
import news from './news/news-reducer';
import panel from './visualization/settings/panel-reducer';
import parameters from './visualization/data/parameter-reducer';
import poi from './visualization/analysis/poi-reducer';
import position from './visualization/settings/position-reducer';
import rowDB from './visualization/data/row-db-reducer';
import rows from './visualization/heatmap/rows-reducer';
import searchStatus from './visualization/markup/search-reducer';
import session from './session/session-reducer';
import settings from './visualization/settings/settings-reducer';
import tabs from './visualization/settings/tabs-reducer';

const reducers = combineReducers({
  analysis,
  annotations,
  article,
  columnDB,
  columns,
  cookies,
  dimensions,
  display,
  gprofiler,
  home,
  markers,
  minimap,
  news,
  panel,
  parameters,
  poi,
  position,
  rowDB,
  rows,
  searchStatus,
  session,
  settings,
  tabs,
});

export default reducers;
