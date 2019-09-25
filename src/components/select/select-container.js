import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import Select from './select';
import useClickOutside from '../../hooks/click-outside/use-click-outside';

const getOptions = (parent, node) => {
  const buttons = parent.getElementsByTagName('button');

  let index = -1;
  for (let i = 0; i < buttons.length; i += 1) {
    if (node === buttons[i]) {
      index = i;
      break;
    }
  }

  return {
    next: index < buttons.length - 1 ? index + 1 : null,
    previous: index > 0 ? index - 1 : null,
    siblings: buttons,
  };
};

const SelectContainer = ({
  id,
  onChange,
  options,
  value,
  ...props
}) => {
  const dropdownRef = useRef(null);
  const [isDropdownVisible, setDropdownVisibility] = useState(true);

  const closeDropdown = () => {
    if (isDropdownVisible) {
      setDropdownVisibility(false);
    }
  };

  useClickOutside(dropdownRef, closeDropdown);

  const focusOption = (option) => {
    if (option) {
      option.focus();
    }
  };

  const handleChange = (e) => {
    if (onChange) {
      const { dataset } = e.target;
      const parsedValue = dataset.value;
      onChange(e, parsedValue);
    }
    setDropdownVisibility(false);
  };

  const handleOptionKeyDown = (e) => {
    const {
      target,
      key,
      keyCode,
      which,
    } = e;
    const context = getOptions(dropdownRef.current, target);

    if (keyCode === 35 || which === 35) {
      focusOption(context.siblings[context.siblings.length - 1]);
    } else if (keyCode === 36 || which === 36) {
      focusOption(context.siblings[0]);
    } else if (keyCode === 38 || which === 38) {
      focusOption(context.siblings[context.previous]);
    } else if (keyCode === 40 || which === 40) {
      focusOption(context.siblings[context.next]);
    } else {
      console.log(key);
    }
  };

  const toggleOnClick = () => {
    setDropdownVisibility(!isDropdownVisible);
    focusOption(dropdownRef.current.getElementsByTagName('button')[0]);
  };

  const toggleOnKeydown = (e) => {
    const { keyCode, which } = e;
    if (keyCode === 13 || which === 13) {
      setDropdownVisibility(!isDropdownVisible);
      focusOption(dropdownRef.current.getElementsByTagName('button')[0]);
    }
  };

  const selectID = id || nanoid();
  const selectedText = options.find(option => option.value === value).label;

  return (
    <Select
      isDropdownVisible={isDropdownVisible}
      handleChange={handleChange}
      handleOptionKeyDown={handleOptionKeyDown}
      options={options}
      ref={dropdownRef}
      selectID={selectID}
      selectedText={selectedText}
      toggleOnClick={toggleOnClick}
      toggleOnKeydown={toggleOnKeydown}
      value={value}
      {...props}
    />
  );
};

SelectContainer.defaultProps = {
  id: undefined,
  value: undefined,
};

SelectContainer.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    }),
  ).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default SelectContainer;
