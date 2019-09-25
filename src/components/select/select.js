import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/pro-solid-svg-icons';

import StyledSelect from './select-style';

const CustomSelect = forwardRef((
  {
    handleChange,
    handleOptionKeyDown,
    isDropdownVisible,
    label,
    options,
    selectID,
    selectedText,
    toggleOnClick,
    toggleOnKeydown,
    value,
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
      className="select__dropdown"
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
        <FontAwesomeIcon
          className={isDropdownVisible ? 'select__arrow select__arrow_up' : 'select__arrow select__arrow_down'}
          icon={faAngleDown}
        />
      </span>
      <div
        aria-activedescendant={value}
        aria-label={`${label} options`}
        className={isDropdownVisible ? 'select__menu select__menu_visible' : 'select__menu'}
        onClick={handleChange}
        onKeyDown={handleOptionKeyDown}
        onKeyPress={handleOptionKeyDown}
        role="listbox"
        tabIndex={isDropdownVisible ? 0 : -1}
      >
        {
          options.map(option => (
            <button
              aria-selected={option.value === value}
              data-value={option.value}
              className="select__option"
              id={option.value}
              key={option.value}
              role="option"
              tabIndex={isDropdownVisible ? 0 : -1}
              type="button"
            >
              {option.label}
            </button>
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
  handleChange: PropTypes.func.isRequired,
  handleOptionKeyDown: PropTypes.func.isRequired,
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
