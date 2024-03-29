import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ErrorBoundary from '../components/error-boundary/error-boundary-container';
import Home from '../home/home-container';
import Loading from './loading';
import Navbar from '../navbar/navbar-container';
import NotFoundPage from './not-found';

import useHashScroll from '../hooks/scroll/use-hash-scroll';

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

const HashScrollRouting = () => {
  useHashScroll();

  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analyze />} />
          <Route path="/help/*" element={<Help />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/tasks/*" element={<Tasks />} />
          <Route path="/utilities" element={<Utilities />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/visualization/*" element={<Visualization />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Suspense>
  );
};

const Routing = () => (
  <Router>
    <ErrorBoundary>
      <HashScrollRouting />
    </ErrorBoundary>
  </Router>
);

export default Routing;
