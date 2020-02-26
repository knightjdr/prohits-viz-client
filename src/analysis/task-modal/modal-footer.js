import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/buttons/rectangular/button';

const ModalFooter = ({
  download,
  handleClose,
  status,
}) => (
  <div className="task__modal-footer">
    {
      (status === 'complete' || status === 'error')
      && (
        <Button
          className="task__modal-footer-download"
          onClick={download}
          type="button"
        >
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
};

ModalFooter.propTypes = {
  download: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  status: PropTypes.string,
};

export default ModalFooter;
