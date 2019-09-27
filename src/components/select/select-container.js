import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useMemo, useRef, useState } from 'react';

import DropdownPortal from './dropdown-portal';
import Select from './select';

import calculateDropdownLayout from './calculate-dropdown-layout';
import getOptionElements from './get-option-elements';
import parseOptions from './parse-options';
import useClickOutside from '../../hooks/click-outside/use-click-outside';
import usePortal from '../../hooks/portal/use-portal';

const SelectContainer = ({
  id,
  onChange,
  openDirection,
  options,
  value,
  ...props
}) => {
  const inputRef = useRef(null);
  const portalRef = useRef(null);
  const [dropdownDirection, setDropdownDirection] = useState('down');
  const [dropdownLayout, setDropdownLayout] = useState({});
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const [searchText, setSearchText] = useState('');

  const inputID = id || nanoid();
  const portalID = `${id}-root`;
  const selectedText = options.find(option => option.value === value).label;

  const portal = usePortal(portalID);

  const optionSettings = useMemo(
    () => parseOptions(options),
    [options],
  );

  const returnFocus = () => {
    inputRef.current.firstChild.focus();
  };

  const closeDropdown = (e) => {
    if (isDropdownVisible) {
      setDropdownVisibility(false);
      const { keyCode, which } = e;
      if (keyCode === 27 || which === 27) {
        returnFocus();
      }
    }
  };

  useClickOutside(inputRef, closeDropdown);

  const findOption = (text) => {
    const index = optionSettings.selectableOptions.findIndex(option => (
      option.label.startsWith(text)
    ));

    if (index > -1) {
      const { elements } = getOptionElements(portalRef.current);
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
      onChange(e, id, parsedValue);
    }
    setDropdownVisibility(false);
    returnFocus();
  };

  const handleKeyDown = (e) => {
    const { target, keyCode, which } = e;
    const context = getOptionElements(portalRef.current, target);

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

  const toggleDropdown = () => {
    const { direction, ...layout } = calculateDropdownLayout(
      inputRef.current,
      optionSettings,
      openDirection,
    );
    setDropdownDirection(direction);
    setDropdownLayout(layout);
    setDropdownVisibility(!isDropdownVisible);
    setSearchText('');
    focusOption(portalRef.current.querySelector('.select__option'));
  };

  const toggleOnKeydown = (e) => {
    const { keyCode, which } = e;
    if (keyCode === 13 || which === 13) {
      toggleDropdown();
    }
  };

  return (
    <>
      <Select
        inputID={inputID}
        isDropdownVisible={isDropdownVisible}
        ref={inputRef}
        selectedText={selectedText}
        toggleOnClick={toggleDropdown}
        toggleOnKeydown={toggleOnKeydown}
        {...props}
      />
      <DropdownPortal
        dropdownDirection={dropdownDirection}
        dropdownLayout={dropdownLayout}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
        handleKeyPress={handleKeyPress}
        isDropdownVisible={isDropdownVisible}
        options={options}
        portal={portal}
        ref={portalRef}
        value={value}
        {...props}
      />
    </>
  );
};

SelectContainer.defaultProps = {
  id: undefined,
  openDirection: '',
  value: undefined,
};

SelectContainer.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  openDirection: PropTypes.string,
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
