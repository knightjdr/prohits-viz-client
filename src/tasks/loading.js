import PropTypes from 'prop-types';
import React from 'react';

import Loading from '../components/loading/page/loading';

const LoadingTasks = ({
  error,
  isLoading,
}) => (
  (error || isLoading)
  && (
    <Loading
      error={error}
      isLoading={isLoading}
      message={error ? 'There was an error updating the task status' : ''}
    />
  )
);

LoadingTasks.propTypes = {
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingTasks;
