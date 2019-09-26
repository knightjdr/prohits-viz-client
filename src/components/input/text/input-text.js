import PropTypes from 'prop-types';
import React from 'react';

import StyledInputText from './input-text-style';

const InputText = ({
  handleBlur,
  handleChange,
  handleKeyDown,
  inputID,
  label,
  ...props
}) => (
  <StyledInputText className="input__container">
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
      onKeyDown={handleKeyDown}
      onKeyPress={handleKeyDown}
      {...props}
    />
  </StyledInputText>
);

InputText.defaultProps = {
  label: '',
};

InputText.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  inputID: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default InputText;
