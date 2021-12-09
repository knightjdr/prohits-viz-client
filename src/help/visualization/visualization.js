import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CircHeatmap from './circheatmap/circheatmap';
import Heatmap from './heatmap/heatmap';
import InputFile from './input-file/input-file';
import Main from './main/visualization-main';
import NotFoundPage from '../../routes/not-found';
import Scatter from './scatter/scatter';

const Visualization = () => (
  <div>
    <h1>Visualization</h1>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="circular-heatmap" element={<CircHeatmap />} />
      <Route path="heatmap" element={<Heatmap />} />
      <Route path="input-file" element={<InputFile />} />
      <Route path="scatterplot" element={<Scatter />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default Visualization;
