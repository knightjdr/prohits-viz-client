import PropTypes from 'prop-types';
import React from 'react';

import Advanced from './advanced';

const AdvancedContainer = ({
  errors,
}) => {
  return (
    <Advanced
      errors={errors}
    />
  );
};

AdvancedContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
};

const ShowWrapper = ({
  show,
  ...props
}) => (
  show && <AdvancedContainer {...props} />
);

ShowWrapper.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ShowWrapper;
