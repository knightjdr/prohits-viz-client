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
    dropdownDirection,
    dropdownLayout,
    handleChange,
    handleKeyDown,
    handleKeyPress,
    isDropdownVisible,
    label,
    options,
    portal,
    value,
  },
  ref,
) => createPortal(
  <Dropdown
    aria-activedescendant={value}
    aria-label={`${label} options`}
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
      options.map(option => (
        option.optGroup
          ? (
            <OptGroup
              key={option.label}
              label={option.label}
            />
          )
          : (
            <Option
              key={option.value}
              label={option.label}
              selectedValue={value}
              value={option.value}
              visible={isDropdownVisible}
            />
          )
      ))
    }
  </Dropdown>,
  portal,
));

DropdownPortal.defaultProps = {
  label: '',
  value: undefined,
};

DropdownPortal.propTypes = {
  dropdownDirection: PropTypes.string.isRequired,
  dropdownLayout: PropTypes.shape({
    bottom: PropTypes.number,
    left: PropTypes.number,
    height: PropTypes.number,
    top: PropTypes.number,
    transformOrigin: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  isDropdownVisible: PropTypes.bool.isRequired,
  label: PropTypes.string,
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
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default DropdownPortal;
