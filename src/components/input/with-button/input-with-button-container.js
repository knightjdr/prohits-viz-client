import PropTypes from 'prop-types';
import React, { useState } from 'react';

import InputWithButton from './input-with-button';

const InputWithButtonContainer = ({
  onClick,
  ...props
}) => {
  const [newValue, setNewValue] = useState('');

  const handleChange = (e, id, inputValue) => {
    const { keyCode, which } = e;
    if (keyCode === 13 || which === 13) {
      onClick(e, id, inputValue);
    } else {
      setNewValue(inputValue);
    }
  };

  const handleClick = (e, id) => {
    onClick(e, id, newValue);
  };

  return (
    <InputWithButton
      handleClick={handleClick}
      handleChange={handleChange}
      value={newValue}
      {...props}
    />
  );
};

InputWithButtonContainer.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default InputWithButtonContainer;
