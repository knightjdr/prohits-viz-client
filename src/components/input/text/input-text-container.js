import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import InputText from './input-text';

const InputTextContainer = ({
  id,
  onBlur,
  onChange,
  onFocus,
  type,
  value,
  warning,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputWarning, setInputWarning] = useState(warning);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    setInputWarning(warning);
  }, [warning]);

  const handleBlur = (e) => {
    if (onBlur) {
      onBlur(e);
    }
    if (onChange) {
      onChange(e, id, inputValue);
    }
  };

  const handleChange = (e) => {
    const { target } = e;

    const parsedValue = target.type === 'number' ? Number(target.value) : target.value;
    setInputValue(parsedValue);
  };

  const handleFocus = (e) => {
    if (onFocus) {
      onFocus(e);
    }
    setInputWarning('');
  };

  const handleKeyDown = (e) => {
    const { keyCode, which } = e;

    if (onChange && (keyCode === 13 || which === 13)) {
      onChange(e, id, inputValue);
    }
  };

  const inputID = id || nanoid();

  const parsedValue = type === 'number' ? Number(inputValue).toString() : inputValue;

  return (
    <InputText
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleFocus={handleFocus}
      handleKeyDown={handleKeyDown}
      inputID={inputID}
      type={type}
      value={parsedValue}
      warning={inputWarning}
      {...props}
    />
  );
};

InputTextContainer.defaultProps = {
  id: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  type: 'text',
  value: undefined,
  warning: '',
};

InputTextContainer.propTypes = {
  id: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  warning: PropTypes.string,
};

export default InputTextContainer;
