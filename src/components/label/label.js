import PropTypes from 'prop-types';
import React from 'react';

const Label = ({
  id,
  label,
}) => (
  label
  && (
    <label htmlFor={id}>
      {label}
      :
    </label>
  )
);

Label.defaultProps = {
  label: '',
};

Label.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Label;
