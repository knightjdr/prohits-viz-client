import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/pro-duotone-svg-icons';

import Dots from '../../feedback/dots/dots';

import './loading.css';

const Loading = ({
  error,
  isLoading,
  message,
}) => {
  let content;
  if (error) {
    content = (
      <span>
        <span className="loading-page__icon">
          <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />
        </span>
        <span>{message}</span>
      </span>
    );
  } else if (isLoading) {
    content = <Dots />;
  }
  return (
    <div className="loading-page">
      {content}
    </div>
  );
};

Loading.defaultProps = {
  error: false,
  isLoading: false,
  message: 'An unknown error occurred',
};

Loading.propTypes = {
  error: PropTypes.bool,
  isLoading: PropTypes.bool,
  message: PropTypes.string,
};

export default Loading;
