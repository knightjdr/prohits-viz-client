import PropTypes from 'prop-types';
import React from 'react';

import Loading from '../components/loading/page/loading';

const messages = [
  '',
  'There was an error updating task status',
  'There are no recently processed tasks. Tasks are only available for 24 hours.',
];

const LoadingTasks = ({
  errorStatus,
  isLoading,
}) => (
  (errorStatus > 0 || isLoading)
  && (
    <Loading
      error={errorStatus > 0}
      isLoading={isLoading}
      message={messages[errorStatus]}
    />
  )
);

LoadingTasks.propTypes = {
  errorStatus: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingTasks;
