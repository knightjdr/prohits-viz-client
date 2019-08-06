import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/pro-duotone-svg-icons';
import { faSpinner } from '@fortawesome/pro-solid-svg-icons';

import StyledLoading from './loading-style';

const Loading = ({
  error,
  isLoading,
  message,
  ...props
}) => {
  let content;
  if (error) {
    content = (
      <span className="loading">
        <span className="loading__icon loading__error">
          <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />
        </span>
        <span>{message}</span>
      </span>
    );
  } else if (isLoading) {
    content = (
      <span className="loading">
        <span className="loading__icon">
          <FontAwesomeIcon icon={faSpinner} size="lg" pulse spin />
        </span>
        <span>{message}</span>
      </span>
    );
  }
  return (
    <StyledLoading {...props}>
      {content}
    </StyledLoading>
  );
};

Loading.defaultProps = {
  error: false,
  isLoading: false,
  message: '',
};

Loading.propTypes = {
  error: PropTypes.bool,
  isLoading: PropTypes.bool,
  message: PropTypes.string,
};

export default Loading;
