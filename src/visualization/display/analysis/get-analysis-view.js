import React from 'react';

import Gprofiler from './gprofiler/gprofiler-container';

const getAnalysisView = (analysisName, analysis) => {
  switch (analysis.type) {
    case 'gprofiler':
      return (
        <Gprofiler
          data={analysis.data}
          analysisID={analysisName}
        />
      );
    default:
      return null;
  }
};

export default getAnalysisView;
