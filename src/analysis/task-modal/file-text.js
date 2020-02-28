import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-duotone-svg-icons';

const FileText = ({
  fetchingText,
  text,
}) => (
  <code
    className="task__modal-text-container"
    style={{ display: text ? 'block' : 'none' }}
  >
    {
      fetchingText
      && (
        <div className="task__modal-text-fetch">
          <FontAwesomeIcon icon={faSpinner} spin />
          Loading...
        </div>
      )
    }
    {text}
  </code>
);

FileText.propTypes = {
  fetchingText: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default FileText;
