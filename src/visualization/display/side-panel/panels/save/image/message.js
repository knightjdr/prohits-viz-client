import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faSpinner } from '@fortawesome/pro-duotone-svg-icons';

const Error = () => (
  <p className="panel__save-message_error">
    <FontAwesomeIcon icon={faExclamationCircle} />
    There was an error exporting the image.
  </p>
);

const Exporting = () => (
  <p className="panel__save-message_exporting">
    <FontAwesomeIcon icon={faSpinner} pulse spin />
    Exporting image...
  </p>
);

const Message = ({
  exporter,
}) => {
  if (exporter.error) {
    return <Error />;
  } if (exporter.exporting) {
    return <Exporting />;
  }
  return null;
};

Message.propTypes = {
  exporter: PropTypes.shape({
    error: PropTypes.bool.isRequired,
    exporting: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Message;
