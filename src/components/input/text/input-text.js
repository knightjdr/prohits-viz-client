import PropTypes from 'prop-types';
import React from 'react';

import StyledInputText from './input-text-style';
import Warning from '../warning/warning';

const InputText = ({
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
    className="input__container"
    label={label}
    vertical={vertical}
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
    <input
      id={inputID}
      onBlur={handleBlur}
      onChange={handleChange}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      {...props}
    />
    <Warning warning={warning} />
  </StyledInputText>
);

InputText.defaultProps = {
  label: '',
  vertical: false,
};

InputText.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  inputID: PropTypes.string.isRequired,
  label: PropTypes.string,
  vertical: PropTypes.bool,
  warning: PropTypes.string.isRequired,
};

export default InputText;
