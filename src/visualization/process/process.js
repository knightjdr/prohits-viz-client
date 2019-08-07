import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Display from '../display/display-container';
import Loading from '../../components/loading/page/loading';

const Process = ({
  error,
  errorMessage,
  isLoading,
}) => (
  <Fragment>
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
  </Fragment>
);

Process.propTypes = {
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Process;
