import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import InputText from './input-text';

const setInitialValue = (type, value) => {
  if (type === 'number' && value === '') {
    return 0;
  }
  return value;
};

const setOptionalProps = (type, props) => {
  const optionalProps = { ...props };
  if (type !== 'number') {
    delete optionalProps.step;
  }

  return optionalProps;
};

const setParsedValue = (type, value) => (
  type === 'number' ? Number(value) : value
);

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
  const [inputID] = useState(id || `id-${nanoid()}`);
  const [inputValue, setInputValue] = useState(setInitialValue(type, value));
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
      onChange(e, id, setParsedValue(type, inputValue));
    }
  };

  const handleChange = (e) => {
    const { target } = e;
    setInputValue(target.value);
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
      onChange(e, id, setParsedValue(type, inputValue));
    }
  };

  const parsedValue = setParsedValue(type, inputValue);
  const optionalProps = setOptionalProps(type, props);

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
      {...optionalProps}
    />
  );
};

InputTextContainer.defaultProps = {
  id: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  step: 'any',
  type: 'text',
  value: '',
  warning: '',
};

InputTextContainer.propTypes = {
  id: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  step: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  warning: PropTypes.string,
};

export default InputTextContainer;
