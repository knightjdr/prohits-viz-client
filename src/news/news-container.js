import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from './list/list-container';
import Article from './article/article-container';
import NotFoundPage from '../routes/not-found';

const NewsContainer = () => (
  <Switch>
    <Route exact path="/news" component={List} />
    <Route path="/news/:id" component={Article} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default NewsContainer;
