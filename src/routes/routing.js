import React, { lazy, Suspense, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/home-container';
import Loading from './loading';
import Navbar from '../navbar/navbar-container';
import NotFoundPage from './not-found';

const Analyze = lazy(() => import('../analysis/analysis-container'));
const Help = lazy(() => import('../help/help-container'));
const News = lazy(() => import('../news/news-container'));
const Tasks = lazy(() => import('../tasks/tasks-router'));
const Utilities = lazy(() => import('../utilities/utilities-container'));
const Visualization = lazy(() => import('../visualization/visualization-container'));

const Videos = () => {
  window.location.replace('https://www.youtube.com/channel/UCGR-0ixL4z526JUVQU8P4xQ');
  return null;
};

const Routing = () => {
  useLayoutEffect(() => window.scrollTo(0, 0));

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <main className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/analysis" component={Analyze} />
            <Route path="/help" component={Help} />
            <Route path="/news" component={News} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/utilities" component={Utilities} />
            <Route path="/videos" component={Videos} />
            <Route path="/visualization" component={Visualization} />
            <Route path="*" exact component={NotFoundPage} />
          </Switch>
        </main>
      </Suspense>
    </Router>
  );
};

export default Routing;
