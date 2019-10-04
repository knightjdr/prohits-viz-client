import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Clear from './clear';
import Placeholder from './placeholder';
import { SelectContainer } from './select-style';
import { ReactComponent as AngleDown } from './angle-down.svg';

const CustomSelect = forwardRef((
  {
    canClear,
    clearOption,
    handleKeyUp,
    inputID,
    isDropdownVisible,
    label,
    placeholder,
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
        onKeyUp={handleKeyUp}
        ref={ref}
        type="button"
        value={selectedText}
      />
      <Clear
        canClear={canClear}
        clearOption={clearOption}
        value={selectedText}
      />
      <Placeholder
        text={placeholder}
        value={selectedText}
      />
      <AngleDown
        className={isDropdownVisible ? 'select__arrow select__arrow_up' : 'select__arrow select__arrow_down'}
      />
    </div>
  </SelectContainer>
));

CustomSelect.defaultProps = {
  canClear: false,
  label: '',
  placeholder: 'Select...',
  selectedText: '',
};

CustomSelect.propTypes = {
  canClear: PropTypes.bool,
  clearOption: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  inputID: PropTypes.string.isRequired,
  isDropdownVisible: PropTypes.bool.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  selectedText: PropTypes.string,
  toggleOnClick: PropTypes.func.isRequired,
  toggleOnKeydown: PropTypes.func.isRequired,
};

export default CustomSelect;
