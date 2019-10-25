import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import InputText from './input-text';

const InputTextContainer = ({
  id,
  onChange,
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
    if (onChange) {
      onChange(e, id, inputValue);
    }
  };

  const handleChange = (e) => {
    const { target } = e;

    const parsedValue = target.type === 'number' ? Number(target.value) : target.value;
    setInputValue(parsedValue);
  };

  const handleFocus = () => {
    setInputWarning('');
  };

  const handleKeyDown = (e) => {
    const { keyCode, which } = e;

    if (onChange && (keyCode === 13 || which === 13)) {
      onChange(e, id, inputValue);
    }
  };

  const inputID = id || nanoid();

  return (
    <InputText
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleFocus={handleFocus}
      handleKeyDown={handleKeyDown}
      inputID={inputID}
      value={inputValue}
      warning={inputWarning}
      {...props}
    />
  );
};

InputTextContainer.defaultProps = {
  id: undefined,
  onChange: undefined,
  value: undefined,
  warning: '',
};

InputTextContainer.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  warning: PropTypes.string,
};

export default InputTextContainer;
