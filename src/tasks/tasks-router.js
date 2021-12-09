import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFoundPage from '../routes/not-found';
import Tasks from './tasks-container';

const TasksRouter = () => (
  <Routes>
    <Route path="/" element={<Tasks />} />
    <Route path="/:id" element={<Tasks />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default TasksRouter;
