import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/pro-duotone-svg-icons';

import Dots from '../../feedback/dots/dots';
import StyledLoading from './loading-style';

const Loading = ({
  error,
  isLoading,
  message,
}) => {
  let content;
  if (error) {
    content = (
      <span>
        <span className="loading__icon">
          <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />
        </span>
        <span>{message}</span>
      </span>
    );
  } else if (isLoading) {
    content = <Dots />;
  }
  return (
    <StyledLoading>
      {content}
    </StyledLoading>
  );
};

Loading.defaultProps = {
  error: false,
  isLoading: false,
  message: 'There was an error',
};

Loading.propTypes = {
  error: PropTypes.bool,
  isLoading: PropTypes.bool,
  message: PropTypes.string,
};

export default Loading;
