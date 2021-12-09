import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

import OptGroup from './opt-group';
import Option from './option';
import { Dropdown } from './select-style';

const setDropdownClass = (direction, isVisible) => {
  const classses = ['select__dropdown'];

  if (isVisible) {
    classses.push('select__dropdown_visible');
  }
  return classses.join(' ');
};

const DropdownPortal = forwardRef((
  {
    canClear,
    dropdownDirection,
    dropdownLayout,
    focusedOption,
    handleChange,
    handleKeyDown,
    handleKeyPress,
    inputID,
    isDropdownVisible,
    label,
    multiple,
    options,
    portal,
    selectedValues,
  },
  ref,
) => createPortal(
  <Dropdown
    aria-activedescendant={focusedOption}
    aria-label={`${label} options`}
    aria-multiselectable={multiple}
    aria-required={!canClear}
    className={setDropdownClass(dropdownDirection, isDropdownVisible)}
    onClick={handleChange}
    onKeyDown={handleKeyDown}
    onKeyPress={handleKeyPress}
    ref={ref}
    role="listbox"
    style={dropdownLayout}
    tabIndex={isDropdownVisible ? 0 : -1}
  >
    {
      options.map((option) => (
        option.optGroup
          ? (
            <OptGroup
              key={option.label}
              label={option.label}
            />
            )
          : (
            <Option
              id={`${inputID}-${option.value}`}
              key={option.value}
              label={option.label}
              selectedValues={selectedValues}
              value={option.value}
              visible={isDropdownVisible}
            />
            )
      ))
    }
  </Dropdown>,
  portal,
));

DropdownPortal.displayName = 'DropdownPortal';
DropdownPortal.defaultProps = {
  focusedOption: '',
  label: '',
};

DropdownPortal.propTypes = {
  canClear: PropTypes.bool.isRequired,
  dropdownDirection: PropTypes.string.isRequired,
  dropdownLayout: PropTypes.shape({
    bottom: PropTypes.number,
    left: PropTypes.number,
    height: PropTypes.number,
    top: PropTypes.number,
    transformOrigin: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
  focusedOption: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  inputID: PropTypes.string.isRequired,
  isDropdownVisible: PropTypes.bool.isRequired,
  label: PropTypes.string,
  multiple: PropTypes.bool.isRequired,
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
  portal: PropTypes.shape({}).isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
};

export default DropdownPortal;
