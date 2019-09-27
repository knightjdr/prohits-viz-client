import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { SelectContainer } from './select-style';
import { ReactComponent as AngleDown } from './angle-down.svg';

const CustomSelect = forwardRef((
  {
    inputID,
    isDropdownVisible,
    label,
    selectedText,
    toggleOnClick,
    toggleOnKeydown,
  },
  ref,
) => (
  <SelectContainer className="select__container">
    {
      label
      && (
        <label htmlFor={inputID}>
          {label}
          :
        </label>
      )
    }
    <div
      className="select__input-container"
      ref={ref}
    >
      <input
        id={inputID}
        onClick={toggleOnClick}
        onKeyDown={toggleOnKeydown}
        ref={ref}
        type="button"
        value={selectedText}
      />
      <AngleDown
        className={isDropdownVisible ? 'select__arrow select__arrow_up' : 'select__arrow select__arrow_down'}
      />
    </div>
  </SelectContainer>
));

CustomSelect.defaultProps = {
  label: '',
  selectedText: '',
};

CustomSelect.propTypes = {
  inputID: PropTypes.string.isRequired,
  isDropdownVisible: PropTypes.bool.isRequired,
  label: PropTypes.string,
  selectedText: PropTypes.string,
  toggleOnClick: PropTypes.func.isRequired,
  toggleOnKeydown: PropTypes.func.isRequired,
};

export default CustomSelect;
