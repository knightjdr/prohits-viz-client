import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faSpinner } from '@fortawesome/pro-duotone-svg-icons';
import { faCheck } from '@fortawesome/pro-solid-svg-icons';

const getStatus = (status) => {
  switch (status) {
    case 'complete':
      return (
        <span className="tasks__table-status_complete">
          <FontAwesomeIcon icon={faCheck} />
          complete
        </span>
      );
    case 'error':
      return (
        <span className="tasks__table-status_error">
          <FontAwesomeIcon icon={faExclamationTriangle} />
          error
        </span>
      );
    case 'running':
      return (
        <span className="tasks__table-status_running">
          <FontAwesomeIcon icon={faSpinner} spin />
          running
        </span>
      );
    default:
      return (
        <span className="tasks__table-status_unknown">
          <FontAwesomeIcon icon={faExclamationTriangle} />
          unknown
        </span>
      );
  }
};

export default getStatus;
