import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/pro-duotone-svg-icons';

import StyledInputText from './input-text-area-style';

const InputTextArea = ({
  handleBlur,
  handleChange,
  handleFocus,
  handleKeyDown,
  inputID,
  label,
  vertical,
  warning,
  ...props
}) => (
  <StyledInputText
    className="textarea__container"
    vertical
  >
    {
      label
      && (
        <label htmlFor={inputID}>
          {label}
          :
        </label>
      )
    }
    <textarea
      id={inputID}
      onBlur={handleBlur}
      onChange={handleChange}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      {...props}
    />
    {
      warning
      && (
        <div className="textarea__warning">
          <FontAwesomeIcon icon={faExclamationTriangle} />
          {warning}
        </div>
      )
    }
  </StyledInputText>
);

InputTextArea.defaultProps = {
  label: '',
  vertical: false,
};

InputTextArea.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  inputID: PropTypes.string.isRequired,
  label: PropTypes.string,
  vertical: PropTypes.bool,
  warning: PropTypes.string.isRequired,
};

export default InputTextArea;
