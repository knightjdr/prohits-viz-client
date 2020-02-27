import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import InputTextArea from './input-text-area';

const InputTextContainer = ({
  id,
  onBlur,
  onChange,
  onFocus,
  value,
  warning,
  ...props
}) => {
  const [inputID] = useState(id || `id-${nanoid()}`);
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
    setInputValue(e.target.value);
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

  return (
    <InputTextArea
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
  id: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  value: null,
  warning: '',
};

InputTextContainer.propTypes = {
  id: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  warning: PropTypes.string,
};

export default InputTextContainer;
