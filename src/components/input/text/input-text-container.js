import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import InputText from './input-text';

const InputTextContainer = ({
  id,
  onChange,
  value,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleBlur = (e) => {
    if (onChange) {
      onChange(e, inputValue);
    }
  };

  const handleChange = (e) => {
    const { target } = e;

    const parsedValue = target.type === 'number' ? Number(target.value) : target.value;
    setInputValue(parsedValue);
  };

  const handleKeyDown = (e) => {
    const { keyCode, which } = e;

    if (onChange && (keyCode === 13 || which === 13)) {
      onChange(e, inputValue);
    }
  };

  const inputID = id || nanoid();

  return (
    <InputText
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleKeyDown={handleKeyDown}
      inputID={inputID}
      value={inputValue}
      {...props}
    />
  );
};

InputTextContainer.defaultProps = {
  id: undefined,
  onChange: undefined,
  value: undefined,
};

InputTextContainer.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default InputTextContainer;
