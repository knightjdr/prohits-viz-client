import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CC from './cc/cc';
import Correlation from './correlation/correlation';
import Dotplot from './dotplot/dotplot';
import InputFile from './input-file/input-file';
import Main from './main/analysis-main';
import NotFoundPage from '../../routes/not-found';
import SCV from './scv/scv';
import Specificity from './specificity/specificity';

const Analysis = () => (
  <div>
    <h1>Analysis</h1>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="condition-condition" element={<CC />} />
      <Route path="correlation" element={<Correlation />} />
      <Route path="dotplot" element={<Dotplot />} />
      <Route path="input-file" element={<InputFile />} />
      <Route path="scv" element={<SCV />} />
      <Route path="specificity" element={<Specificity />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default Analysis;
