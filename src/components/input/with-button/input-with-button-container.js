import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import InputWithButton from './input-with-button';

const InputWithButtonContainer = ({
  id,
  onClick,
  ...props
}) => {
  const [inputID] = useState(id || `id-${nanoid()}`);
  const [newValue, setNewValue] = useState('');

  const handleChange = (e, elementID, inputValue) => {
    const { keyCode, which } = e;
    if (keyCode === 13 || which === 13) {
      onClick(e, elementID, inputValue);
    } else {
      setNewValue(inputValue);
    }
  };

  const handleClick = (e, elementID) => {
    onClick(e, elementID, newValue);
  };

  return (
    <InputWithButton
      handleClick={handleClick}
      handleChange={handleChange}
      id={inputID}
      value={newValue}
      {...props}
    />
  );
};

InputWithButtonContainer.defaultProps = {
  id: null,
};

InputWithButtonContainer.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default InputWithButtonContainer;
