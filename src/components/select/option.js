import PropTypes from 'prop-types';
import React from 'react';

const Option = ({
  label,
  selectedValue,
  value,
  visible,
}) => (
  <div
    aria-selected={value === selectedValue}
    data-value={value}
    className="select__option"
    role="option"
    tabIndex={visible ? 0 : -1}
    title={label}
  >
    {label}
  </div>
);

Option.defaultProps = {
  selectedValue: '',
};

Option.propTypes = {
  label: PropTypes.string.isRequired,
  selectedValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string.isRequired,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string.isRequired,
  ]).isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Option;
