import PropTypes from 'prop-types';
import React from 'react';

import Loading from '../../../../../../components/loading/element/loading';

const ArchivingStatus = ({
  archiving,
  error,
  message,
}) => {
  if (archiving) {
    return (
      <div className="panel__save-archive-status panel__save-archive-status_loading">
        <Loading
          isLoading={archiving}
          error={error}
          message={message}
        />
      </div>
    );
  } if (error) {
    return (
      <div className="panel__save-archive-status panel__save-archive-status_error">
        <Loading
          isLoading={archiving}
          error={error}
          message={message}
        />
      </div>
    );
  }
  return null;
};

ArchivingStatus.propTypes = {
  archiving: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default ArchivingStatus;
