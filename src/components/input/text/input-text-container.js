import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React from 'react';

import InputText from './input-text';

const InputTextContainer = ({
  id,
  onChange,
  ...props
}) => {
  const handleChange = (e) => {
    if (onChange) {
      const { type, value } = e.target;

      let parsedValue = value;
      if (type === 'number') {
        parsedValue = Number(value);
      }

      onChange(e, parsedValue);
    }
  };

  const inputID = id || nanoid();

  return (
    <InputText
      handleChange={handleChange}
      inputID={inputID}
      {...props}
    />
  );
};

InputTextContainer.defaultProps = {
  id: undefined,
  onChange: undefined,
};

InputTextContainer.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputTextContainer;
