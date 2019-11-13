import PropTypes from 'prop-types';
import React from 'react';
import Loading from '../../../components/loading/page/loading';

const Analysis = ({
  analysis,
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
    : <div>content</div>
);

Analysis.propTypes = {
  analysis: PropTypes.shape({
    didError: PropTypes.bool,
    message: PropTypes.string,
    isProcessing: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Analysis;
