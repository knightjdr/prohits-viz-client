import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import InputCheckbox from './input-checkbox';

const InputCheckboxContainer = ({
  id,
  onChange,
  ...props
}) => {
  const [inputID] = useState(id || `id-${nanoid()}`);

  const handleChange = (e) => {
    if (onChange) {
      const { checked } = e.target;
      onChange(e, id, checked);
    }
  };

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
