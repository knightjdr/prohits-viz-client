import PropTypes from 'prop-types';
import React from 'react';

import Display from '../display/display';
import Loading from '../../components/loading/page/loading';

const Process = ({
  error,
  errorMessage,
  isLoading,
}) => (
  <>
    {
      error
      || isLoading
        ? (
          <Loading
            className="visualization__display-status"
            error={error}
            isLoading={isLoading}
            message={errorMessage}
          />
          )
        : <Display />
    }
  </>
);

Process.propTypes = {
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Process;
