import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import OptGroup from './opt-group';
import Option from './option';
import StyledSelect from './select-style';
import { ReactComponent as AngleDown } from './angle-down.svg';

const setDropdownClass = (direction, isVisible) => {
  const classses = ['select__dropdown', `select__dropdown_${direction}`];

  if (isVisible) {
    classses.push('select__dropdown_visible');
  }
  return classses.join(' ');
};

const CustomSelect = forwardRef((
  {
    dropdownDirection,
    handleChange,
    handleKeyDown,
    handleKeyPress,
    isDropdownVisible,
    label,
    options,
    selectID,
    selectedText,
    toggleOnClick,
    toggleOnKeydown,
    value,
    ...props
  },
  ref,
) => (
  <StyledSelect className="select__container">
    {
      label
      && (
        <label htmlFor={selectID}>
          {label}
          :
        </label>
      )
    }
    <span
      className="select__dropdown-container"
      ref={ref}
    >
      <span className="select__input-container">
        <input
          id={selectID}
          onClick={toggleOnClick}
          onKeyDown={toggleOnKeydown}
          ref={ref}
          type="button"
          value={selectedText}
        />
        <AngleDown
          className={isDropdownVisible ? 'select__arrow select__arrow_up' : 'select__arrow select__arrow_down'}
        />
      </span>
      <div
        aria-activedescendant={value}
        aria-label={`${label} options`}
        className={setDropdownClass(dropdownDirection, isDropdownVisible)}
        onClick={handleChange}
        onKeyDown={handleKeyDown}
        onKeyPress={handleKeyPress}
        role="listbox"
        tabIndex={isDropdownVisible ? 0 : -1}
        {...props}
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
      </div>
    </span>
  </StyledSelect>
));

CustomSelect.defaultProps = {
  label: '',
  selectedText: '',
  value: undefined,
};

CustomSelect.propTypes = {
  dropdownDirection: PropTypes.string.isRequired,
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
  selectID: PropTypes.string.isRequired,
  selectedText: PropTypes.string,
  toggleOnClick: PropTypes.func.isRequired,
  toggleOnKeydown: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default CustomSelect;
