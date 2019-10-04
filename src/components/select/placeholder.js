import PropTypes from 'prop-types';
import React from 'react';

const Placeholder = ({
  text,
  value,
}) => (
  !value
    ? (
      <span className="select__placeholder">
        {text}
      </span>
    )
    : null
);

Placeholder.defaultProps = {
  text: 'Select...',
  value: '',
};

Placeholder.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
};

export default Placeholder;
