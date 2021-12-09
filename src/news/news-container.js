import React from 'react';
import { Routes, Route } from 'react-router-dom';

import List from './list/list-container';
import Article from './article/article-container';
import NotFoundPage from '../routes/not-found';

const NewsContainer = () => (
  <Routes>
    <Route path="/" element={<List />} />
    <Route path=":id" element={<Article />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default NewsContainer;
