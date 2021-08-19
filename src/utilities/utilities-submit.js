import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-solid-svg-icons';

import Button from '../components/buttons/rectangular/button';

const UtilitiesSubmit = ({
  files,
  handleSubmit,
  uploadProgress,
  utility,
}) => (
  files.length > 0
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

UtilitiesSubmit.defaultProps = {
  files: [],
};

UtilitiesSubmit.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({})),
  handleSubmit: PropTypes.func.isRequired,
  uploadProgress: PropTypes.number.isRequired,
  utility: PropTypes.string.isRequired,
};

export default UtilitiesSubmit;
