import PropTypes from 'prop-types';
import React from 'react';

import IconButton from '../../buttons/icon/button';
import Input from '../text/input-text-container';
import StyledInput from './input-with-button-style';

const InputWithButton = ({
  buttonKind,
  buttonType,
  handleChange,
  handleClick,
  icon,
  id,
  inputType,
  label,
  placeholder,
  value,
}) => (
  <StyledInput className="input-with-button">
    <Input
      id={`${id}-input`}
      label={label}
      onChange={handleChange}
      placeholder={placeholder}
      type={inputType}
      value={value}
    />
    <IconButton
      id={`${id}-button`}
      icon={icon}
      kind={buttonKind}
      onClick={handleClick}
      type={buttonType}
    />
  </StyledInput>
);

InputWithButton.defaultProps = {
  buttonKind: 'secondary',
  buttonType: 'button',
  inputType: 'text',
  label: '',
  placeholder: '',
};

InputWithButton.propTypes = {
  buttonKind: PropTypes.string,
  buttonType: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.shape({}).isRequired,
  id: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default InputWithButton;
