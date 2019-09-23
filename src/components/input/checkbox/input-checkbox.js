import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-solid-svg-icons';

import StyledInputText from './input-checkbox-style';

const InputCheckbox = ({
  checked,
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
    <span className="input__checkbox">
      <input
        checked={checked}
        id={inputID}
        onChange={handleChange}
        type="checkbox"
        {...props}
      />
      <span>
        <FontAwesomeIcon icon={faCheck} />
      </span>
    </span>
  </StyledInputText>
);

InputCheckbox.defaultProps = {
  checked: false,
  label: '',
};

InputCheckbox.propTypes = {
  checked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  inputID: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default InputCheckbox;
