import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/pro-solid-svg-icons';

import StyledSelect from './select-style';

const Select = ({
  dropdownVisibility,
  handleChange,
  label,
  options,
  selectID,
  toggleDropdown,
  value,
  ...props
}) => (
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
    <span className="select__dropdown-container">
      <select
        id={selectID}
        onChange={handleChange}
        value={value}
        {...props}
      >
        {
          options.map(option => (
            <option
              key={option.value}
            >
              {option.text}
            </option>
          ))
        }
      </select>
      <span className="select__dropdown">
        <button
          className="select__selected-value"
          onClick={toggleDropdown}
          type="button"
        >
          {value}
          <FontAwesomeIcon
            className={dropdownVisibility ? 'select__arrow_open' : undefined}
            icon={faAngleDown}
          />
        </button>
      </span>
    </span>
  </StyledSelect>
);

Select.defaultProps = {
  label: '',
  value: undefined,
};

Select.propTypes = {
  dropdownVisibility: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
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
  toggleDropdown: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default Select;
