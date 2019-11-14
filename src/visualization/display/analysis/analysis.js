import PropTypes from 'prop-types';
import React from 'react';
import Loading from '../../../components/loading/page/loading';

import getAnalysisView from './get-analysis-view';

const Analysis = ({
  analysis,
  analysisName,
}) => (
  analysis.isProcessing
  || analysis.didError
    ? (
      <Loading
        error={analysis.didError}
        isLoading={analysis.isProcessing}
        message={analysis.message}
      />
    )
    : getAnalysisView(analysisName, analysis)
);

Analysis.propTypes = {
  analysisName: PropTypes.string.isRequired,
  analysis: PropTypes.shape({
    didError: PropTypes.bool,
    message: PropTypes.string,
    isProcessing: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Analysis;
