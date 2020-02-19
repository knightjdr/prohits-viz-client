import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-duotone-svg-icons';

const Error = ({
  show,
}) => (
  show
  && (
    <div className="analysis__submission-error">
      <FontAwesomeIcon icon={faInfoCircle} size="lg" />
      <p>
        There are errors on the form. Please correct before proceeding.
      </p>
    </div>
  )
);

Error.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Error;
