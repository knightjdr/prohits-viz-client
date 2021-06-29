import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/pro-duotone-svg-icons';

import StyledWarning from './warning-style';

const Warning = ({
  warning,
}) => (
  warning
  && (
    <StyledWarning className="input__warning">
      <div>
        <FontAwesomeIcon icon={faExclamationTriangle} />
        {warning}
      </div>
    </StyledWarning>
  )
);

Warning.defaultProps = {
  warning: '',
};

Warning.propTypes = {
  warning: PropTypes.string,
};

export default Warning;
