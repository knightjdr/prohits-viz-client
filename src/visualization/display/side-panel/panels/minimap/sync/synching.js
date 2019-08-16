import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-duotone-svg-icons';

const Synching = () => (
  <span>
    <FontAwesomeIcon icon={faSpinner} spin />
    Syncing...
  </span>
);

export default Synching;
