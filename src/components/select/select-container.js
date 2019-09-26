import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import Select from './select';

import getOptionElements from './get-option-elements';
import useClickOutside from '../../hooks/click-outside/use-click-outside';

const SelectContainer = ({
  id,
  onChange,
  options,
  value,
  ...props
}) => {
  const dropdownRef = useRef(null);
  const [dropdownDirection, setDropdownDirection] = useState('down');
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const [searchText, setSearchText] = useState('');

  const closeDropdown = () => {
    if (isDropdownVisible) {
      setDropdownVisibility(false);
    }
  };

  useClickOutside(dropdownRef, closeDropdown);

  const findOption = (text) => {
    const index = options.findIndex(option => option.label.startsWith(text));

    if (index > -1) {
      const { elements } = getOptionElements(dropdownRef.current);
      elements[index].focus();
    }
  };

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

  const handleKeyDown = (e) => {
    const { target, keyCode, which } = e;
    const context = getOptionElements(dropdownRef.current, target);

    if (keyCode === 8 || which === 8) {
      e.preventDefault();
      setSearchText(searchText.substring(0, searchText.length - 1));
    } else if (keyCode === 35 || which === 35) {
      focusOption(context.elements[context.elements.length - 1]);
    } else if (keyCode === 36 || which === 36) {
      focusOption(context.elements[0]);
    } else if (keyCode === 38 || which === 38) {
      focusOption(context.elements[context.previous]);
    } else if (keyCode === 40 || which === 40) {
      focusOption(context.elements[context.next]);
    }
  };

  const handleKeyPress = (e) => {
    const { key, keyCode, which } = e;

    if (keyCode === 32 || which === 32) {
      handleChange(e);
    } else if (/^\w{1}$/.test(key)) {
      const newSearchText = searchText + key;
      setSearchText(newSearchText);
      findOption(newSearchText);
    }
  };

  const calculateDropdownDirection = () => {
    const rect = dropdownRef.current.getBoundingClientRect();
    const { innerHeight } = window;

    const distanceToBottom = innerHeight - rect.bottom;
    return distanceToBottom > rect.top ? 'down' : 'up';
  };

  const toggleDropdown = () => {
    setDropdownDirection(calculateDropdownDirection());
    setDropdownVisibility(!isDropdownVisible);
    setSearchText('');
    focusOption(dropdownRef.current.querySelector('.select__option'));
  };

  const toggleOnKeydown = (e) => {
    const { keyCode, which } = e;
    if (keyCode === 13 || which === 13) {
      toggleDropdown();
    }
  };

  const selectID = id || nanoid();
  const selectedText = options.find(option => option.value === value).label;

  return (
    <Select
      dropdownDirection={dropdownDirection}
      isDropdownVisible={isDropdownVisible}
      handleChange={handleChange}
      handleKeyDown={handleKeyDown}
      handleKeyPress={handleKeyPress}
      options={options}
      ref={dropdownRef}
      selectID={selectID}
      selectedText={selectedText}
      toggleOnClick={toggleDropdown}
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
