import React from 'react';

import Gprofiler from './gprofiler/gprofiler-container';

const getAnalysisView = (analysisName, analysis) => {
  if (analysis.type === 'gprofiler') {
    return (
      <Gprofiler
        data={analysis.data}
        analysisID={analysisName}
      />
    );
  }
  return null;
};

export default getAnalysisView;
