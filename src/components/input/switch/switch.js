import PropTypes from 'prop-types';
import React from 'react';

import StyledSwitch from './switch-style';

const Switch = ({
  checked,
  handleChange,
  inputID,
  label,
  ...props
}) => (
  <StyledSwitch className="input__container">
    {
      label
      && (
        <label htmlFor={inputID}>
          {label}
          :
        </label>
      )
    }
    <span className="input__switch">
      <input
        checked={checked}
        id={inputID}
        onChange={handleChange}
        type="checkbox"
        {...props}
      />
      <div className="input__switch-slider" />
    </span>
  </StyledSwitch>
);

Switch.defaultProps = {
  checked: false,
  label: '',
};

Switch.propTypes = {
  checked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  inputID: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Switch;
