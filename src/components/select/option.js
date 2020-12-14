import PropTypes from 'prop-types';
import React from 'react';

const setTabIndex = (visible) => (visible ? 0 : -1);

const Option = ({
  id,
  label,
  selectedValues,
  value,
  visible,
}) => (
  <div
    aria-selected={selectedValues.includes(value)}
    data-value={value}
    className="select__option"
    id={id}
    role="option"
    tabIndex={setTabIndex(visible)}
    title={label}
  >
    {label}
  </div>
);

Option.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string.isRequired,
  ]).isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Option;
