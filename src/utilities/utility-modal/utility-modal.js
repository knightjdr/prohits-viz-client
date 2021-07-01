import PropTypes from 'prop-types';
import React from 'react';

import Modal from '../../components/modal/modal-container';
import ModalContent from './modal-content';
import ModalFooter from './modal-footer';

import './utility-modal.css';

const UtilityModal = ({
  download,
  downloading,
  handleClose,
  status,
  taskID,
}) => (
  <Modal
    footer={(
      <ModalFooter
        download={download}
        downloading={downloading}
        handleClose={handleClose}
        status={status.status}
        taskID={taskID}
        tool={status.tool}
      />
    )}
    isOpen
    name="task-modal"
    title={`Task: ${taskID}`}
  >
    <ModalContent
      status={status.status}
      taskID={taskID}
    />
  </Modal>
);

UtilityModal.defaultProps = {
  status: {},
};

UtilityModal.propTypes = {
  download: PropTypes.func.isRequired,
  downloading: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  status: PropTypes.shape({
    status: PropTypes.string,
    tool: PropTypes.string,
  }),
  taskID: PropTypes.string.isRequired,
};

export default UtilityModal;
