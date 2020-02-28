import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSpinner } from '@fortawesome/pro-duotone-svg-icons';

import Button from '../../components/buttons/rectangular/button';

const ModalFooter = ({
  download,
  downloading,
  handleClose,
  status,
  taskID,
  tool,
}) => (
  <div className="task__modal-footer">
    {
      (status === 'complete' || status === 'error')
      && (
        <Button
          className="task__modal-footer-download"
          data-taskid={taskID}
          data-tool={tool}
          disabled={downloading}
          onClick={download}
          type="button"
        >
          <FontAwesomeIcon
            icon={downloading ? faSpinner : faDownload}
            spin={downloading}
          />
          Download
        </Button>
      )
    }
    <Button
      className="task__modal-footer-close"
      kind="warning"
      onClick={handleClose}
      type="button"
    >
      Close
    </Button>
  </div>
);

ModalFooter.defaultProps = {
  status: 'initializing',
  taskID: '',
  tool: '',
};

ModalFooter.propTypes = {
  download: PropTypes.func.isRequired,
  downloading: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  taskID: PropTypes.string,
  status: PropTypes.string,
  tool: PropTypes.string,
};

export default ModalFooter;
