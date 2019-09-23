import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React from 'react';

import InputCheckbox from './input-checkbox';

const InputCheckboxContainer = ({
  id,
  onChange,
  ...props
}) => {
  const handleChange = (e) => {
    if (onChange) {
      const { checked } = e.target;
      onChange(e, checked);
    }
  };

  const inputID = id || nanoid();

  return (
    <InputCheckbox
      handleChange={handleChange}
      inputID={inputID}
      {...props}
    />
  );
};

InputCheckboxContainer.defaultProps = {
  id: undefined,
  onChange: undefined,
};

InputCheckboxContainer.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputCheckboxContainer;
