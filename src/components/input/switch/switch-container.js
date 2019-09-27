import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React from 'react';

import Switch from './switch';

const SwitchContainer = ({
  id,
  onChange,
  ...props
}) => {
  const handleChange = (e) => {
    if (onChange) {
      const { checked } = e.target;
      onChange(e, id, checked);
    }
  };

  const inputID = id || nanoid();

  return (
    <Switch
      handleChange={handleChange}
      inputID={inputID}
      {...props}
    />
  );
};

SwitchContainer.defaultProps = {
  id: undefined,
  onChange: undefined,
};

SwitchContainer.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
};

export default SwitchContainer;
