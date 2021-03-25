import PropTypes from 'prop-types';
import React, { useState } from 'react';

import AnalysisOptions from './options';

import useSubmitAnalysis from '../submit/use-submit-analysis';

const AnalysisOptionsContainer = ({
  helpLink,
}) => {
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
      helpLink={helpLink}
      submitForm={submitForm}
    />
  );
};

AnalysisOptionsContainer.defaultProps = {
  helpLink: '',
};

AnalysisOptionsContainer.propTypes = {
  helpLink: PropTypes.string,
};

export default AnalysisOptionsContainer;
