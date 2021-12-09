import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Process from './process/process-container';
import Load from './load/load-container';
import NotFoundPage from '../routes/not-found';

const VisualizationContainer = () => (
  <Routes>
    <Route path="/" element={<Load />} />
    <Route path=":id/:filename" element={<Process />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default VisualizationContainer;
