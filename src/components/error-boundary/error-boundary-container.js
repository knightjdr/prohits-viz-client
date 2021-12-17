import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import ErrorBoundary from './error-boundary';

import fetch from '../../utils/fetch';

class ErrorBoundaryContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch (error, info) {
    this.setState({ hasError: true });
    const { session } = this.props;
    const options = {
      data: {
        error: error.toString(),
        info,
      },
      headers: { session },
      method: 'POST',
    };
    fetch('/error', options);
  }

  render () {
    const { children } = this.props;
    const { hasError } = this.state;
    return (
      <ErrorBoundary
        hasError={hasError}
      >
        {children}
      </ErrorBoundary>
    );
  }
}

ErrorBoundaryContainer.defaultProps = {
  session: '',
};

ErrorBoundaryContainer.propTypes = {
  children: PropTypes.node.isRequired,
  session: PropTypes.string,
};

const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps, null)(ErrorBoundaryContainer);
