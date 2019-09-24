import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Select from './select';

const SelectContainer = ({
  id,
  onChange,
  ...props
}) => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const handleChange = (e) => {
    const { dataset } = e.target;
    if (onChange) {
      onChange(e);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisibility(!dropdownVisibility);
  };

  const selectID = id || nanoid();

  return (
    <Select
      dropdownVisibility={dropdownVisibility}
      handleChange={handleChange}
      selectID={selectID}
      toggleDropdown={toggleDropdown}
      {...props}
    />
  );
};

SelectContainer.defaultProps = {
  id: undefined,
  onChange: undefined,
};

SelectContainer.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
};

export default SelectContainer;
