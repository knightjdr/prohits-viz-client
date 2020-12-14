import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../../../../../../components/buttons/rectangular/button';

const Error = ({
  syncMinimap,
}) => (
  <>
    <p className="minimap__synching_error">
      <FontAwesomeIcon icon={faExclamationTriangle} />
      There was an error synchronizing the image
    </p>
    <Button
      kind="secondary"
      onClick={syncMinimap}
      shadow
      type="button"
    >
      Sync
    </Button>
  </>
);

Error.propTypes = {
  syncMinimap: PropTypes.func.isRequired,
};

export default Error;
