import PropTypes from 'prop-types';
import React from 'react';

import StyledInputText from './input-text-style';

const InputText = ({
  handleChange,
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
      onChange={handleChange}
      {...props}
    />
  </StyledInputText>
);

InputText.defaultProps = {
  label: '',
};

InputText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputID: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default InputText;
