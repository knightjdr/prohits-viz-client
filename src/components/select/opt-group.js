import PropTypes from 'prop-types';
import React from 'react';

const OptGroup = ({
  label,
}) => (
  <div
    className="select__opt-group"
    title={label}
  >
    {label}
  </div>
);

OptGroup.propTypes = {
  label: PropTypes.string.isRequired,
};

export default OptGroup;
