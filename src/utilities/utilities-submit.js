import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-solid-svg-icons';

import Button from '../components/buttons/rectangular/button';

const UtilitiesSubmit = ({
  file,
  handleSubmit,
  uploadProgress,
  utility,
}) => (
  file instanceof File
  && utility
  && (
    <div className="utility__submit">
      <Button
        kind="success"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      {
        uploadProgress > 0
        && (
          <div className="utility__submit-progress">
            <FontAwesomeIcon icon={faSpinner} spin />
            Uploading
            {' '}
            {uploadProgress}
            %
          </div>
        )
      }
    </div>
  )
);

UtilitiesSubmit.propTypes = {
  file: PropTypes.shape({}).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  uploadProgress: PropTypes.number.isRequired,
  utility: PropTypes.string.isRequired,
};

export default UtilitiesSubmit;
