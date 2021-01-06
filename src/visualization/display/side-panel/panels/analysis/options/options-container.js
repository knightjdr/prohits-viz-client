import React, { useState } from 'react';

import AnalysisOptions from './options';

import useSubmitAnalysis from '../submit/use-submit-analysis';

const AnalysisOptionsContainer = () => {
  const [analysisName, setAnalysisName] = useState('');
  const [analysisType, setAnalysisType] = useState('gprofiler');

  const submit = useSubmitAnalysis();

  const handleAnalysisNameChange = (e, id, value) => {
    setAnalysisName(value);
  };

  const handleAnalysisTypeChange = (e, id, value) => {
    setAnalysisType(value);
  };

  const submitForm = () => {
    submit(analysisType, analysisName);
  };

  return (
    <AnalysisOptions
      analysisName={analysisName}
      analysisType={analysisType}
      handleAnalysisNameChange={handleAnalysisNameChange}
      handleAnalysisTypeChange={handleAnalysisTypeChange}
      submitForm={submitForm}
    />
  );
};

export default AnalysisOptionsContainer;
