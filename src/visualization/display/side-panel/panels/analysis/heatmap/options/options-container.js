import React from 'react';

import AnalysisOptions from './options';

const AnalysisOptionsContainer = () => {
  const handleChange = (e, id, value) => {
    console.log(value);
  };

  return (
    <AnalysisOptions
      handleChange={handleChange}
      selectedAnalysis="''"
    />
  );
};

export default AnalysisOptionsContainer;
