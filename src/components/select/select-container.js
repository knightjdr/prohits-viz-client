import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { useMemo, useRef, useState } from 'react';

import DropdownPortal from './dropdown-portal';
import Select from './select';

import calculateDropdownLayout from './calculate-dropdown-layout';
import createSelectedText from './create-selected-text';
import findFocusIndex from './find-focus-index';
import formatReturnValue from './format-return-value';
import getOptionElements from './get-option-elements';
import parseOptions from './parse-options';
import parseValue from './parse-value';
import updateSelectedValues from './update-selected-values';
import useClickOutside from '../../hooks/click-outside/use-click-outside';
import usePortal from '../../hooks/portal/use-portal';
import * as keyCodes from '../../utils/pressed-key-code';

const letterRE = new RegExp(/^\w{1}$/);

const SelectContainer = ({
  canClear,
  id,
  multiple,
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
  const [focusedOption, setFocusedOption] = useState();
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const [searchText, setSearchText] = useState('');

  const optionSettings = useMemo(() => parseOptions(options), [options]);

  const [selectedValues, setSelectedValues] = useState(parseValue(optionSettings.selectableOptions, value));
  const selectedText = useMemo(
    () => createSelectedText(optionSettings.selectableOptions, selectedValues),
    [optionSettings.selectableOptions, selectedValues],
  );

  const returnFocus = (e, onlyOnEscape) => {
    if (!onlyOnEscape || keyCodes.pressedEscape(e)) {
      inputRef.current.firstChild.focus();
    }
  };

  const closeDropdown = (e) => {
    setDropdownVisibility(false);
    returnFocus(e, true);
    const returnValue = formatReturnValue(multiple, selectedValues);
    onChange(e, id, returnValue);
  };

  useClickOutside(portalRef, closeDropdown);

  const clearOption = (e) => {
    const returnValue = formatReturnValue(multiple, '');
    onChange(e, id, returnValue);
  };

  const focusOption = (option) => {
    if (option) {
      setFocusedOption(option.id);
      option.focus();
    }
  };

  const findOption = (queryText) => {
    const text = queryText.toLowerCase();
    const index = optionSettings.selectableOptions.findIndex(option => (
      option.label.toLowerCase().startsWith(text)
    ));

    if (index > -1) {
      const { elements } = getOptionElements(portalRef.current);
      focusOption(elements[index]).focus();
    }
  };

  const handleChange = (e) => {
    const { dataset } = e.target;
    const elementOptions = {
      canClear,
      multiple,
    };
    const updatedSelectedValues = updateSelectedValues(selectedValues, dataset.value, elementOptions);
    setSelectedValues(updatedSelectedValues);
    if (!multiple) {
      setDropdownVisibility(false);
      returnFocus();
      const returnValue = formatReturnValue(multiple, updatedSelectedValues);
      onChange(e, id, returnValue);
    }
  };

  const handleKeyDown = (e) => {
    const { target } = e;
    const context = getOptionElements(portalRef.current, target);

    if (keyCodes.pressedBackspace(e)) {
      e.preventDefault();
      setSearchText(searchText.substring(0, searchText.length - 1));
    } else if (keyCodes.pressedEnd(e)) {
      e.preventDefault();
      focusOption(context.elements[context.elements.length - 1]);
    } else if (keyCodes.pressedHome(e)) {
      e.preventDefault();
      focusOption(context.elements[0]);
    } else if (keyCodes.pressedArrowUp(e)) {
      e.preventDefault();
      focusOption(context.elements[context.previous]);
    } else if (keyCodes.pressedArrowDown(e)) {
      e.preventDefault();
      focusOption(context.elements[context.next]);
    }
  };

  const handleKeyPress = (e) => {
    const { key } = e;

    if (keyCodes.pressedSpace(e)) {
      e.preventDefault();
      handleChange(e);
    } else if (letterRE.test(key)) {
      const newSearchText = searchText + key;
      setSearchText(newSearchText);
      findOption(newSearchText);
    }
  };

  const handleKeyUp = (e) => {
    e.preventDefault();
  };

  const toggleDropdown = () => {
    const { direction, ...layout } = calculateDropdownLayout(
      inputRef.current,
      optionSettings.height,
      openDirection,
    );
    setDropdownDirection(direction);
    setDropdownLayout(layout);
    setDropdownVisibility(!isDropdownVisible);
    setSearchText('');
    const focusIndex = findFocusIndex(optionSettings.selectableOptions, selectedValues);
    focusOption(portalRef.current.querySelectorAll('.select__option')[focusIndex]);
    portalRef.current.scrollTop = optionSettings.optionHeight * focusIndex;
  };

  const toggleOnKeydown = (e) => {
    if (keyCodes.pressedEnter(e)) {
      toggleDropdown();
    }
  };

  const inputID = id || nanoid();
  const portalID = `${id}-root`;
  const portal = usePortal(portalID);

  return (
    <>
      <Select
        canClear={canClear}
        clearOption={clearOption}
        handleKeyUp={handleKeyUp}
        inputID={inputID}
        isDropdownVisible={isDropdownVisible}
        ref={inputRef}
        selectedText={selectedText}
        toggleOnClick={toggleDropdown}
        toggleOnKeydown={toggleOnKeydown}
        {...props}
      />
      <DropdownPortal
        canClear={canClear}
        dropdownDirection={dropdownDirection}
        dropdownLayout={dropdownLayout}
        focusedOption={focusedOption}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
        handleKeyPress={handleKeyPress}
        inputID={inputID}
        isDropdownVisible={isDropdownVisible}
        multiple={multiple}
        options={optionSettings.options}
        portal={portal}
        ref={portalRef}
        selectedValues={selectedValues}
        {...props}
      />
    </>
  );
};

SelectContainer.defaultProps = {
  canClear: false,
  id: undefined,
  multiple: false,
  openDirection: '',
  value: [],
};

SelectContainer.propTypes = {
  canClear: PropTypes.bool,
  id: PropTypes.string,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  openDirection: PropTypes.string,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.string,
    ),
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]),
        value: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]),
      }),
    ),
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.number,
      PropTypes.string,
    ),
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default SelectContainer;
