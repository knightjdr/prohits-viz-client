import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Clear from './clear';
import Label from '../label/label';
import Placeholder from './placeholder';
import Warning from '../input/warning/warning';
import { SelectContainer } from './select-style';
import { ReactComponent as AngleDown } from './angle-down.svg';

const CustomSelect = forwardRef((
  {
    canClear,
    clearOption,
    handleFocus,
    handleKeyUp,
    inputID,
    isDropdownVisible,
    label,
    placeholder,
    selectedText,
    toggleOnClick,
    toggleOnKeydown,
    vertical,
    warning,
    ...props
  },
  ref,
) => (
  <SelectContainer
    className={`select__container ${vertical ? 'select__container_vertical' : 'select__container_horizontal'}`}
  >
    <Label
      id={inputID}
      label={label}
    />
    <div
      className="select__input-container"
      ref={ref}
    >
      <input
        {...props}
        id={inputID}
        onClick={toggleOnClick}
        onFocus={handleFocus}
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
    <Warning warning={warning} />
  </SelectContainer>
));

CustomSelect.displayName = 'CustomSelect';
CustomSelect.defaultProps = {
  label: '',
  placeholder: 'Select...',
  selectedText: '',
  vertical: true,
  warning: '',
};

CustomSelect.propTypes = {
  canClear: PropTypes.bool.isRequired,
  clearOption: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  inputID: PropTypes.string.isRequired,
  isDropdownVisible: PropTypes.bool.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  selectedText: PropTypes.string,
  toggleOnClick: PropTypes.func.isRequired,
  toggleOnKeydown: PropTypes.func.isRequired,
  vertical: PropTypes.bool,
  warning: PropTypes.string,
};

export default CustomSelect;
